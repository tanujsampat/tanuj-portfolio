import { useEffect, useRef } from "react";
import { content } from "../data/content";

export default function SignalLogs() {
  const scrollRef = useRef();

  useEffect(() => {
    const el = scrollRef.current;
    let scroll = 0;

    const animate = () => {
      if (el) {
        scroll += 0.35;
        el.scrollLeft = scroll;

        if (scroll >= el.scrollWidth / 2) {
          scroll = 0;
        }
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div style={{ padding: "20px 80px" ,position: "relative",
  zIndex: 3 }}>
      
      <h2 style={{
        marginBottom: "0px",
        fontSize: "34px",
        letterSpacing: "0.5px"
      }}>
        SYSTEM FEED
      </h2>

      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "25px",
          overflow: "hidden", height: "200px",          // 🔥 ADD THIS
          alignItems: "center",     // 🔥 center cards vertically
          padding: "05 px 0" }}
      >
        {[...content.logs, ...content.logs].map((log, i) => (
          <div
            key={i}
            style={{
              minWidth: "300px",
              maxWidth: "300px",
              padding: "24px",
              borderRadius: "18px",

              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(12px)",

              border: "1px solid rgba(0,255,200,0.25)",
              color: "#00ffcc",

              fontFamily: "monospace",
              fontSize: "16px",   // 👈 MATCH PROJECTS / SKILLS
              lineHeight: "1.7",

              transition: "0.25s ease"
            }}

            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 30px #00ffcc55";
              e.currentTarget.style.transform = "translateY(-5px)";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}