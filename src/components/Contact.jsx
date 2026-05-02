
export default function Contact() {
  return (
    <div style={{ padding: "100px 80px" }}>
      
      <h2 style={{
        marginBottom: "30px",
        fontSize: "34px",       // 👈 match other sections
        letterSpacing: "0.5px"
      }}>
        CONNECT
      </h2>

      <p style={{
        opacity: 0.75,
        fontSize: "18px",
        marginBottom: "40px",
        maxWidth: "500px",
        lineHeight: "1.6"
      }}>
        If something here caught your attention, let's connect and build something meaningful.
      </p>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "400px"
      }}>

        {/* EMAIL */}
        <a
          href="mailto:sampattanuj@gmail.com"
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 30px #00ffcc55";
            e.currentTarget.style.transform = "translateY(-4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          📡 Send Signal (Email)
        </a>

        {/* LINKEDIN */}
        <a
          href="https://linkedin.com/in/tanujsampat"
          target="_blank"
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 30px #00ffcc55";
            e.currentTarget.style.transform = "translateY(-4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          🔗 LinkedIn
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/tanujsampat"
          target="_blank"
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 30px #00ffcc55";
            e.currentTarget.style.transform = "translateY(-4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          🧠 GitHub
        </a>

      </div>
    </div>
  );
}

const cardStyle = {
  padding: "18px 22px",
  borderRadius: "16px",
  border: "1px solid rgba(0,255,200,0.25)",
  color: "#00ffcc",
  textDecoration: "none",
  background: "rgba(0,0,0,0.5)",
  backdropFilter: "blur(12px)",   // 👈 glass effect

  fontFamily: "monospace",
  fontSize: "16px",

  transition: "0.25s ease",
};