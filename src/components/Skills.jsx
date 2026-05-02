import { useState } from "react";
import { Cpu, Code, Database, Zap, Coffee, AlertTriangle } from "lucide-react";
import { content } from "../data/content";
import Typewriter from "./Typewriter";

export default function Skills() {
  const [active, setActive] = useState(null);
  const [visible, setVisible] = useState(false);

  // 🔥 icon mapping (since icons are not stored in data.js)
  const iconMap = {
    core: <Cpu size={34} />,
    coding: <Code size={34} />,
    hardware: <Database size={34} />,
    performance: <Zap size={34} />,
    energy: <Coffee size={34} />,
    debug: <AlertTriangle size={34} />
  };

  const handleClick = (skill) => {
    if (active) {
      setVisible(false);

      setTimeout(() => {
        setActive(skill);
        setVisible(true);
      }, 300);
    } else {
      setActive(skill);
      setVisible(true);
    }
  };

  return (
    <div style={{ padding: "100px 80px" }}>
      
      <h2 style={{
        marginBottom: "20px",
        fontSize: "34px",
        letterSpacing: "0.5px"
      }}>
        TECH STACK
      </h2>

      {/* GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "25px"
      }}>
        {content.skills.map((skill) => (
          <div
            key={skill.id}
            onClick={() => handleClick(skill)}
            style={{
              height: "130px",
              borderRadius: "18px",
              border: `2px solid ${skill.color}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(12px)",
              transition: "0.25s ease",
              transform: "perspective(600px)"
            }}

            // 🔥 3D tilt
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              const rotateX = (y / rect.height - 0.5) * 12;
              const rotateY = (x / rect.width - 0.5) * -12;

              e.currentTarget.style.transform =
                `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "perspective(600px) rotateX(0) rotateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}

            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 30px ${skill.color}`;
            }}
          >
            {iconMap[skill.id] || <Cpu size={34} />}
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
          border: `1px solid ${active.color}`,
          backdropFilter: "blur(15px)",

          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateY(0)"
            : "translateY(20px)",

          transition: "all 0.3s ease"
        }}>
          <h3 style={{
            color: active.color,
            fontSize: "26px",
            marginBottom: "10px"
          }}>
            {active.label}
          </h3>

          <Typewriter
            key={active.id}
            lines={active.terminal}   // 🔥 fully from data.js
          />
        </div>
      )}
    </div>
  );
}