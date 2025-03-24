import torch
from transformers import AutoTokenizer, AutoModelForCausalLM, TrainingArguments, Trainer
from datasets import load_dataset

# ✅ Step 1: Load Dataset
dataset_path = "./data/conversation.jsonl"
try:
    dataset = load_dataset("json", data_files=dataset_path, split="train")
    print("✅ Dataset loaded successfully!")
except Exception as e:
    print(f"❌ Error loading dataset: {e}")
    exit()

# ✅ Step 2: Load Tokenizer
model_name = "microsoft/DialoGPT-small"  # Choose an appropriate model
tokenizer = AutoTokenizer.from_pretrained(model_name)
tokenizer.pad_token = tokenizer.eos_token  # Ensure padding token is set

# ✅ Step 3: Tokenization with Labels
def tokenize_function(samples):
    """
    Tokenize user messages & bot responses, ensuring proper labels for supervised learning.
    """
    inputs, labels = [], []

    for message_list in samples["messages"]:
        if isinstance(message_list, list) and len(message_list) >= 2:
            user_text = message_list[0].get("content", "")
            bot_text = message_list[1].get("content", "")
        else:
            user_text, bot_text = "", ""

        # Combine user input and response
        full_text = user_text + tokenizer.eos_token + bot_text
        tokenized = tokenizer(full_text, truncation=True, padding="max_length", max_length=128)

        # Ensure labels match inputs (necessary for loss calculation)
        tokenized["labels"] = tokenized["input_ids"].copy()

        inputs.append(tokenized)

    return {key: [dic[key] for dic in inputs] for key in inputs[0]}

# Apply tokenization
try:
    tokenized_dataset = dataset.map(tokenize_function, batched=True)
    print("✅ Tokenization completed with labels!")
except Exception as e:
    print(f"❌ Error during tokenization: {e}")
    exit()

# ✅ Step 4: Load Pretrained Model
try:
    model = AutoModelForCausalLM.from_pretrained(model_name)
    print("✅ Model loaded successfully!")
except Exception as e:
    print(f"❌ Error loading model: {e}")
    exit()

# ✅ Step 5: Set Training Arguments
training_args = TrainingArguments(
    output_dir="./chatbot_model",
    per_device_train_batch_size=4,  # Adjust based on GPU memory
    num_train_epochs=3,
    logging_steps=10,
    save_steps=1000,
    save_total_limit=2,
    eval_strategy="no",
    fp16=torch.cuda.is_available(),
    push_to_hub=False,
)

# ✅ Step 6: Define Trainer
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_dataset,
)

# ✅ Step 7: Train the Model
try:
    trainer.train()
    print("✅ Model fine-tuned successfully!")
except Exception as e:
    print(f"❌ Error during training: {e}")
    exit()

# ✅ Step 8: Save the Model and Tokenizer
try:
    trainer.save_model("./chatbot_model")
    tokenizer.save_pretrained("./chatbot_model")
    print("🎉 Fine-tuning complete! Model saved in './chatbot_model'")
except Exception as e:
    print(f"❌ Error saving model: {e}")
