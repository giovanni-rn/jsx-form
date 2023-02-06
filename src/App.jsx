import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("default text");
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(text + parseInt(count));
  };

  return (
    <div className="App">
      <h2>{count}</h2>
      <h2>{text}</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="button"
          onClick={() => setCount(count + 1)}
          value="Ajoute 1"
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="Lancer l'alerte" />
      </form>
    </div>
  );
}

export default App;
