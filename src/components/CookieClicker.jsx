import { useState } from "react";
import "./CookieClicker.css";

function CookieClicker() {
  const [score, setScore] = useState(0);

  function handleClick() {
    setScore(score + 1);
  }

  return (
    <div className="cookie-card">
      <h2>Cookie Clicker</h2>
      <p>Klikk på kjeksen for å samle poeng!</p>

      <div className="score-display">
        <h3>Poeng: {score}</h3>
      </div>

      <button className="cookie-button" onClick={handleClick}>
        <img
          src={`${import.meta.env.BASE_URL}cookie.png`}
          alt="Chocolate chip cookie"
          className="cookie-image"
        />
      </button>

      <p className="cookie-hint">Hvert klikk gir deg 1 poeng!</p>
    </div>
  );
}

export default CookieClicker;
