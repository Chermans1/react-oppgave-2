import "./index.css";
import CookieClicker from "./components/CookieClicker";
import CatFacts from "./components/CatFacts";
import Users from "./components/Users";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Oppgave 2</h1>
        <p>Tre små React-prosjekter med useState og useEffect</p>
      </header>

      <main className="app-content">
        <CookieClicker />
        <CatFacts />
        <Users />
      </main>

      <footer className="app-footer">
        <p>Laget med React, Vite og JavaScript</p>
      </footer>
    </div>
  );
}

export default App;
