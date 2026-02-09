import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const BACKEND_URL = "http://127.0.0.1:8000/api/facts";

  const fetchFacts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(BACKEND_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch facts");
      }

      const data = await response.json();

      // IMPORTANT FIX: Backend returns { count, facts }
      // So we must take data.facts, NOT data directly
      setFacts(data.facts || []);
    } catch (err) {
      setError("Could not load facts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  const filteredFacts =
  search.trim() === ""
    ? []   // show nothing when search box is empty
    : facts.filter(fact =>
        fact.fact.toLowerCase().includes(search.toLowerCase()) ||
        fact.id.toString().includes(search)
      );



  return (
    <div className="container">
      <h1>🌍 Fun Facts App</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search facts by Number or Words..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={fetchFacts}>🔄 Refresh Facts</button>
      </div>

      {loading && <p className="loading">Loading facts... ⏳</p>}
      {error && <p className="error">{error}</p>}

      <div className="cards">
        {filteredFacts.map((fact) => (
          <div key={fact.id} className="card">
            <h3>Fact #{fact.id}</h3>
            <p>{fact.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
