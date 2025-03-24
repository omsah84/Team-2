import numpy as np
import pandas as pd
import joblib
from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import re
import random_responses
from pymongo import MongoClient, errors

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Try to connect to MongoDB
try:
    client = MongoClient("mongodb://localhost:27017/", serverSelectionTimeoutMS=5000)
    client.server_info()  # Force connection check
    db = client["mydatabase"]
    contact_collection = db["contacts"]
    print("✅ Connected to MongoDB successfully.")
except errors.ServerSelectionTimeoutError as err:
    print("❌ Failed to connect to MongoDB:", err)
    db = None
    contact_collection = None

# Load bot responses from JSON
def load_json(file):
    try:
        with open(file, "r") as bot_responses:
            print(f"Loaded '{file}' successfully!")
            return json.load(bot_responses)
    except FileNotFoundError:
        print(f"Error: File '{file}' not found.")
        return []
    except json.JSONDecodeError:
        print(f"Error: Invalid JSON in '{file}'.")
        return []

responses_data = load_json("bot.json")

# Bot logic
def get_response(input_string):
    if not input_string.strip():
        return "Please type something so we can chat :)"

    split_message = re.split(r"\s+|[,;?!.-]\s*", input_string.lower())
    score_list = []

    for response in responses_data:
        required_words = [word.lower() for word in response.get("required_words", [])]
        user_inputs = [word.lower() for word in response["user_input"]]

        if all(word in split_message for word in required_words):
            score = sum(word in split_message for word in user_inputs)
            score_list.append(score)
        else:
            score_list.append(0)

    best_score = max(score_list)
    response_index = score_list.index(best_score)

    if best_score > 0:
        return responses_data[response_index]["bot_response"]
    else:
        return random_responses.random_string()

# Save contact info to MongoDB
def save_contact(name, email, message):
    if contact_collection is not None:
        contact = {
            "name": name,
            "email": email,
            "message": message
        }
        result = contact_collection.insert_one(contact)
        return str(result.inserted_id)
    else:
        return None

# Get all contacts from MongoDB
def get_all_contacts():
    if contact_collection is not None:
        contacts = list(contact_collection.find({}, {"_id": 0}))
        return contacts
    else:
        return None

# Routes
@app.route("/")
def home():
    if db:
        return "Connected to MongoDB!"
    else:
        return "Failed to connect to MongoDB."

@app.route("/chatbot", methods=["POST"])
def chatbot_response():
    data = request.json
    user_input = data.get("message", "")

    if not user_input:
        return jsonify({"error": "No message provided"}), 400

    response = get_response(user_input)
    return jsonify({"response": response})

@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({"error": "All fields (name, email, message) are required."}), 400

    contact_id = save_contact(name, email, message)

    if contact_id:
        return jsonify({"message": "Contact saved successfully!", "id": contact_id}), 201
    else:
        return jsonify({"error": "Database connection error."}), 500

@app.route("/contacts", methods=["GET"])
def get_contacts():
    contacts = get_all_contacts()
    if contacts is not None:
        return jsonify(contacts), 200
    else:
        return jsonify({"error": "Database connection error."}), 500

# Run Flask app
if __name__ == "__main__":
    app.run(debug=True)
