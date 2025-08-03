import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName}){
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)
    function handleEditClick(){
        setIsEditing(isEditing => !isEditing)

        if (isEditing){
            onChangeName(symbol, playerName)
        }
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = 'Edit'
    
    if (isEditing) {
        editablePlayerName = <input type="text" defaultValue={playerName} onChange={(e) => setPlayerName(e.target.value)} required/>
        btnCaption="Save"
    }

    let playerClass = "player"
    
    if (isActive){
        playerClass += ' active'
    }
    return (
        <li className={playerClass}>
            <span className="player-info">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )
}