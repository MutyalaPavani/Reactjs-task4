
import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <header className="header">
        {/* <h2>Counter<span>App.</span></h2> */}

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "☀ Light Mode" : "☾ Dark Mode"}
        </button>
      </header>

      <main className="main">

        <p className="subtitle">REACT USESTATE PROJECT</p>

        <h1>Simple Counter</h1>

        <div className="counter-card">

          <p className="counter-label">CURRENT COUNT</p>

          <div className="count">{count}</div>

          <p className="message">
            {count > 0
              ? "Great! Keep going."
              : count < 0
              ? "Your count is below zero."
              : "Ready to start counting?"}
          </p>

          <div className="buttons">

            <button className="increment" onClick={increment}>
              + Increment
            </button>

            <button className="decrement" onClick={decrement}>
              − Decrement
            </button>

          </div>

          <button className="reset" onClick={reset}>
            ↻ Reset Counter
          </button>

        </div>

        <div className="theme-status">
          <span>{darkMode ? "🌙" : "☀"}</span>
          <p>
            Current Theme: <strong>{darkMode ? "Dark Mode" : "Light Mode"}</strong>
          </p>
        </div>

      </main>

    </div>
  );
}

export default App;
