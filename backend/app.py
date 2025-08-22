import random
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/find-winner", methods=["POST"])
def find_winner():
    try:
        data = request.get_json()
        item = data.get("name")
        computer_choice = random.choice(["rock", "paper", "scissor"])
        if item == computer_choice:
            return jsonify({"success": True, "message": "Tie!", "data": [data, computer_choice]})
        elif item == "rock":
            if computer_choice == "paper":
                return jsonify({"success": True, "message": "User wins!", "data": [data, computer_choice]})
            else:
                return jsonify({"success": True, "message": "Computer wins!", "data": [data, computer_choice]})
        elif item == "paper":
            if computer_choice == "rock":
                return jsonify({"success": True, "message": "User wins!", "data": [data, computer_choice]})
            else:
                return jsonify({"success": True, "message": "Computer wins!", "data": [data, computer_choice]})
        elif item == "scissor":
            if computer_choice == "paper":
                return jsonify({"success": True, "message": "User wins!", "data": [data, computer_choice]})
            else:
                return jsonify({"success": True, "message": "Computer wins!", "data": [data, computer_choice]})
    except Exception as e:
        return jsonify({"success": False, "message": "An error has occurred", "data": f"Error: {e}"})

if __name__ == "__main__":
    app.run(debug=True)