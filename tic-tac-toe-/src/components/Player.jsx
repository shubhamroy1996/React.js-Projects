import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [initialPlayerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    //setIsEditing(!isEditing)
    /* Instead of using '!' though it will work but thats not an appropriate way of doing it, 
        infact better way React developer suggested as below:- */

    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerName = <span className="player-name">{initialPlayerName}</span>;
  if (isEditing) {
    playerName = (
      <input
        type="text"
        placeholder={initialPlayerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
