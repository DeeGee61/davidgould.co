import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section style={{ padding: "40px" }}>
        <h2>Current Research</h2>

        <ul>
          <li>Velocity Amplification</li>
          <li>Ramjet Ignition Velocity (RIV)</li>
          <li>Interstellar Power Generation</li>
          <li>Plasma Shielding Architectures</li>
          <li>First-Order Numerical Simulation</li>
        </ul>
      </section>
    </>
  );
}