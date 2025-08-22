import { useState } from "react";

function ItemModal({ display, setDisplay, setItemInfo }) {
  const [chosenItem, setChosenItem] = useState({ name: "", item: "" });

  function handleOptionChange(e) {
    if (e.target.textContent === "🪨") {
      setChosenItem({ ...chosenItem, name: "rock", item: "🪨" });
      setItemInfo({ ...chosenItem, name: "rock", item: "🪨" });
    } else if (e.target.textContent === "📄") {
      setChosenItem({ ...chosenItem, name: "paper", item: "📄" });
      setItemInfo({ ...chosenItem, name: "paper", item: "📄" });
    } else {
      setChosenItem({ ...chosenItem, name: "scissor", item: "✂️" });
      setItemInfo({ ...chosenItem, name: "scissor", item: "✂️" });
    }
  }

  function chooseItem() {
    setDisplay("none");
  }

  return (
    <div style={{ display: display }}>
      <button
        onClick={(e) => handleOptionChange(e)}
        className="btn modal-choice"
      >
        🪨
      </button>
      <button
        onClick={(e) => handleOptionChange(e)}
        className="btn modal-choice"
      >
        📄
      </button>
      <button
        onClick={(e) => handleOptionChange(e)}
        className="btn modal-choice"
      >
        ✂️
      </button>

      <button
        disabled={!chosenItem.name}
        onClick={chooseItem}
        className="btn choose-item"
      >
        {!chosenItem.name
          ? "Please choose an item"
          : `Chosen item: ${chosenItem.name}`}
      </button>
    </div>
  );
}

export default ItemModal;
