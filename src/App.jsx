import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
const [activePlayer, setActivePlayer] = useState('X');
function handleSelectSquare() {
  setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  setGameTurns();
}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
        <Player initialNname = "Player 1" symbol="X" isActive={activePlayer === 'X'} />
        <Player initialNname = "Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      <Log />
    </main>
  );
}

export default App;
