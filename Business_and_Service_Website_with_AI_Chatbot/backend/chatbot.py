import torch
from flask import Flask, request, jsonify
from transformers import AutoTokenizer, AutoModelForCausalLM

app = Flask(__name__)

# ✅ Load Model and Tokenizer
model_path = "../model/chatbot_model"  # Ensure this path is correct
tokenizer = AutoTokenizer.from_pretrained(model_path)
model = AutoModelForCausalLM.from_pretrained(model_path)

@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()
        user_input = data.get("message", "").strip()

        if not user_input:
            return jsonify({"response": "⚠️ No message provided."})

        # ✅ Encode user input
        inputs = tokenizer(user_input, return_tensors="pt", padding=True, truncation=True)

        # ✅ Generate response with repetition penalty
        with torch.no_grad():
            output = model.generate(
                **inputs, 
                max_length=100, 
                temperature=0.7, 
                top_k=50,  # Filters out unlikely words
                top_p=0.9,  # Nucleus sampling
                repetition_penalty=1.2,  # Prevents repeating phrases
                do_sample=True
            )

        # ✅ Decode response properly
        response_text = tokenizer.decode(output[0], skip_special_tokens=True).strip()

        # ✅ Prevent excessive repetition
        words = response_text.split()
        if len(words) > 5 and len(set(words[:5])) == 1:  # If first 5 words are identical
            response_text = words[0]  # Keep only the first occurrence

        return jsonify({"response": response_text})

    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == "__main__":
    app.run(debug=True)
