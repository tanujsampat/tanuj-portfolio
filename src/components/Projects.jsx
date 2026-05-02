import { useState } from "react";
import { content } from "../data/content";
import Typewriter from "./Typewriter";

export default function Projects() {
  const [active, setActive] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleClick = (proj) => {
    if (active) {
      setVisible(false);
      setTimeout(() => {
        setActive(proj);
        setVisible(true);
      }, 300);
    } else {
      setActive(proj);
      setVisible(true);
    }
  };

  return (
    <div style={{ padding: "40px 80px" }}>
      
      <h2 style={{
        marginBottom: "20px",
        fontSize: "34px",
        letterSpacing: "0.5px"
      }}>
        PROJECT MODULES
      </h2>

      {/* GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "25px"
      }}>
        {content.projects.map((proj, i) => (
          <div
            key={i}
            onClick={() => handleClick(proj)}
            style={{
              padding: "25px",
              borderRadius: "18px",
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(0,255,255,0.25)",
              cursor: "pointer",
              transition: "0.25s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 30px #00ffff55";
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h3 style={{
              fontSize: "22px",
              marginBottom: "10px"
            }}>
              {proj.name}
            </h3>

            <p style={{
              opacity: 0.75,
              fontSize: "16px",
              lineHeight: "1.6"
            }}>
              {proj.desc}
            </p>
          </div>
        ))}
      </div>

      {/* TERMINAL PANEL */}
      {active && (
        <div style={{
          marginTop: "50px",
          padding: "35px",
          borderRadius: "18px",
          background: "rgba(0,0,0,0.75)",
          border: "1px solid #00ffff",
          backdropFilter: "blur(15px)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.3s ease"
        }}>

          {/* HEADER ROW */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px"
          }}>
            <h3 style={{
              color: "#00ffff",
              fontSize: "22px",
              margin: 0
            }}>
              {active.name}
            </h3>

            <a
              href={active?.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#00ffcc",
                textDecoration: "none",
                fontSize: "18px"
              }}
            >
             <a
  href={active?.github}
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#00ffcc",
    textDecoration: "none",
    fontSize: "15px",
    fontFamily: "monospace"
  }}
>
  Open Repo ↗
</a>
            </a>
          </div>

          {/* TYPEWRITER */}
          <Typewriter
            key={active.name}
            lines={active?.terminal || []}
          />

        </div>
      )}
    </div>
  );
}