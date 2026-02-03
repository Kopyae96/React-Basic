import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (!name) {
      setError("Empty is not allowed");
    } else if(name.trim() === ''){
      setError("invalid name")
    }
      else setError('');
  }, [name]);
  return (
    <>
      <form>
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <p>{error}</p>}
      </form>
    </>
  );
}

export default App;
