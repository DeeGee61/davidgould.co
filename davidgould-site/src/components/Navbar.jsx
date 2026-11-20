export default function Navbar() {
  return (
    <nav
      style={{
        padding: "20px",
        borderBottom: "1px solid #334155",
        display: "flex",
        gap: "20px",
      }}
    >
      <a href="/">Home</a>
      <a href="/sikerr">SIKERR</a>
      <a href="/simulator">Simulator</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}