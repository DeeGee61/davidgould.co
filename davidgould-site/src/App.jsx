export default function App() {
  return (
    <div
      style={{
        background: "#0f172a",
        color: "#e2e8f0",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "10px",
          }}
        >
          SIKERR
        </h1>

        <h2
          style={{
            color: "#38bdf8",
            fontWeight: "normal",
          }}
        >
          Spacecraft Interstellar Kinetic Energy Recovery and Reuse
        </h2>

        <p
          style={{
            marginTop: "30px",
            maxWidth: "800px",
            lineHeight: "1.7",
            fontSize: "1.2rem",
          }}
        >
          Investigating advanced spacecraft architectures capable
          of recovering kinetic energy from matter encountered
          during interstellar flight and utilizing that energy
          for propulsion, power generation, and shielding.
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#94a3b8",
          }}
        >
          Patent Pending • U.S. Provisional Application Filed
          November 2026
        </p>
      </header>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "30px",
        }}
      >
        <h2>Current Research</h2>

        <ul
          style={{
            lineHeight: "2",
          }}
        >
          <li>Velocity Amplification</li>
          <li>Ramjet Ignition Velocity (RIV)</li>
          <li>Interstellar Power Generation</li>
          <li>Plasma Shielding Architectures</li>
          <li>First-Order Numerical Simulation</li>
        </ul>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "30px",
        }}
      >
        <h2>Simulator Status</h2>

        <p>
          The SIKERR First-Order Simulator is currently being
          expanded to evaluate thrust, drag, power generation,
          energy recovery, and Ramjet Ignition Velocity across
          subrelativistic, transrelativistic, relativistic, and
          ultrarelativistic regimes.
        </p>
      </section>
    </div>
  );
}