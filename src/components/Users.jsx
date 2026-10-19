import { useState } from "react";
import "./Users.css";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

function Users() {
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function addUser(event) {
    event.preventDefault();

    if (username.trim() === "" || email.trim() === "") {
      return;
    }

    const newUser = {
      username: username,
      email: email,
    };

    setUsers([...users, newUser]);

    setUsername("");
    setEmail("");
  }

  return (
    <div className="users-card">
      <h2>Users</h2>
      <p>Her er en oversikt over registrerte brukere.</p>

      <form className="users-form" onSubmit={addUser}>
        <h3>Registrer ny bruker</h3>

        <div className="form-group">
          <label htmlFor="username">Brukernavn</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Skriv inn brukernavn"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-post</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Skriv inn e-post"
            required
          />
        </div>

        <button className="add-user-button" type="submit">
          Legg til bruker
        </button>
      </form>

      <h3 className="users-count">Registrerte brukere ({users.length})</h3>

      <ul className="users-list">
        {users.map((user, index) => (
          <li className="user-item" key={index}>
            <div className="user-avatar">
              {user.username.charAt(0).toUpperCase()}
            </div>

            <div className="user-info">
              <h3>{user.username}</h3>
              <p>{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
