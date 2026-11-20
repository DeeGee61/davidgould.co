import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "20px",
        borderBottom: "1px solid #334155",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.3rem",
        }}
      >
        SIKERR
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/sikerr">SIKERR</Link>
        <Link to="/simulator">Simulator</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}