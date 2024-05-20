import Header from "./Header";
import Player from "./components/Player";
function App() {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
            <Player initialName="Player 1" symbol="X" />
            <Player initialName="Player 2" symbol="O" />
          </ol>
          GAME BOARD
        </div>
      </main>
    </>
  );
}

export default App;
