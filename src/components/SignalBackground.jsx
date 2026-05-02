import { useEffect, useRef } from "react";

export default function SignalBackground() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        speed: Math.random() * 1 + 0.3
      });
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      particles.forEach(p => {
        // glow
        ctx.beginPath();
        ctx.fillStyle = "rgba(0,255,150,0.6)";
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // motion
        p.y += p.speed;

        if (p.y > h) {
          p.y = 0;
          p.x = Math.random() * w;
        }
      });

      
    }


    

  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none"
      }}
    />
  );
}