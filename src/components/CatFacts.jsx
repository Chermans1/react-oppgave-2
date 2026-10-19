import { useState, useEffect } from "react";
import "./CatFacts.css";

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function fetchFacts() {
    setLoading(true);
    setError(null);

    const randomPage = Math.floor(Math.random() * 20) + 1;

    fetch(`https://catfact.ninja/facts?limit=5&page=${randomPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Kunne ikke hente kattfakta");
        }
        return response.json();
      })
      .then((data) => {
        setFacts(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchFacts();
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cat-card">
      <h2>Cat Facts</h2>
      <p>Her er fem interessante fakta om katter!</p>

      {loading && <p>Loading...</p>}

      {error && <p className="cat-error">Feil: {error}</p>}

      {!loading && !error && (
        <ul className="cat-list">
          {facts.map((fact, index) => (
            <li className="cat-fact" key={index}>
              <span className="fact-number">{index + 1}</span>
              <p>{fact.fact}</p>
            </li>
          ))}
        </ul>
      )}

      <button className="cat-button" onClick={fetchFacts} disabled={loading}>
        {loading ? "Henter fakta..." : "Hent nye kattfakta"}
      </button>
    </div>
  );
}

export default CatFacts;
