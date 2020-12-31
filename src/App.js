import "./App.css";
import { SimpleButton } from "./stories/Component/Button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SimpleButton variant="success" size="small" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
