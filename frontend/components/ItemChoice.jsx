import { useState } from "react";
import ItemModal from "./ItemModal";

function ItemChoice() {
  const [modalDisplay, setModalDisplay] = useState("none");
  const [itemChoice, setItemChoice] = useState({ name: "rock", item: "🪨" });
  const [isDisabled, setIsDisabled] = useState(false);

  function openModal() {
    setModalDisplay("block");
  }

  async function readyPlayer() {
    setIsDisabled(true);
    try {
      const res = await fetch("http://localhost:5000/api/find-winner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: itemChoice.name }),
      });
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
      const json = await res.json();
      console.log(json);
    } catch (e) {
      console.error(`Error: ${e}`);
    }
  }

  return (
    <div>
      <button
        disabled={isDisabled}
        onClick={openModal}
        className="btn player-choice"
      >
        {itemChoice.item}
      </button>
      <ItemModal
        display={modalDisplay}
        setDisplay={setModalDisplay}
        setItemInfo={setItemChoice}
      />
      {isDisabled ? (
        <p>Item in play: {itemChoice.name}</p>
      ) : (
        <p>Current item: {itemChoice.name}</p>
      )}

      <button onClick={readyPlayer} className="btn ready">
        Ready
      </button>
    </div>
  );
}

export default ItemChoice;
