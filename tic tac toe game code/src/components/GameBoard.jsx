const initialGameBoard = [
    [null, null, null],
    [null,null, null],
    [null,null, null],
]

export default function GameBoard({onSelectSquare, board}){
    return(
        <ol id="game-board">
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex} onClick={() => onSelectSquare(rowIndex, colIndex)}><button disabled = {playerSymbol !== null}>{playerSymbol}</button></li> )}
                </ol>
            </li>)}
        </ol>
    )
} 