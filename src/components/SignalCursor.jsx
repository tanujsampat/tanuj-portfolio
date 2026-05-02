import { useEffect, useState } from "react";

export default function SignalCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const hoverOn = () => setHover(true);
    const hoverOff = () => setHover(false);

    window.addEventListener("mousemove", move);

    document.querySelectorAll("a, button, div").forEach((el) => {
      el.addEventListener("mouseenter", hoverOn);
      el.addEventListener("mouseleave", hoverOff);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* glow */}
      <div
        style={{
          position: "fixed",
          top: pos.y,
          left: pos.x,
          width: "30px",
          height: "30px",
          background: "rgba(0,255,200,0.15)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          transition: "0.15s ease",
          zIndex: 9998,
          filter:"blur(10px)"
        }}
      />

      {/* core */}
      <div
        style={{
          position: "fixed",
          top: pos.y,
          left: pos.x,
          width: "6px",
          height: "6px",
          background: "#00ffcc",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999
        }}
      />
    </>
  );
}
