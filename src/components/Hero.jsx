export default function Hero() {
  return (
    <div style={{ padding: "100px 80px" }}>

      {/* TITLE */}
      <h1 style={{
        fontSize: "56px",
        fontWeight: "800",
        marginBottom: "30px",
        letterSpacing: "1px"
      }}>
        TANUJ SAMPAT{" "}
        <span style={{ color: "#00ffcc", fontWeight: "500" }}>
          // PORTFOLIO
        </span>
      </h1>

      {/* BIG TERMINAL CARD */}
      <div style={{
        background: "rgba(0,0,0,0.75)",
        border: "1px solid rgba(0,255,200,0.25)",
        borderRadius: "16px",
        padding: "35px 45px",
        fontFamily: "monospace",
        fontSize: "18px",
        lineHeight: "2",
        width: "fit-content",
        minWidth: "420px",

        backdropFilter: "blur(15px)",
        boxShadow: "0 0 25px rgba(0,255,200,0.1)"
      }}>

        <Row label="ROLE" value="Electronics Engineer" />
        <Row label="BASE" value="VIT Vellore / Mumbai" />
        <Row label="STATE" value="Active" />
        <Row label="GPA" value="8.73 — Stable" />
        <Row label="MODE" value="Real-time Systems" />

      </div>

      {/* STATEMENT */}
      <div style={{
        marginTop: "40px",
        fontSize: "22px",
        lineHeight: "1.6",
        maxWidth: "650px"
      }}>
        <p>I don’t write code. I build systems.</p>
        <p>If it works only in simulation, it’s broken.</p>
      </div>

    </div>
  );
}

/* 🔥 CLEAN ROW COMPONENT */
function Row({ label, value }) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <span style={{
        color: "#777",
        minWidth: "80px"
      }}>
        {label}
      </span>

      <span style={{
        color: "#00ffcc"
      }}>
        {value}
      </span>
    </div>
  );
}