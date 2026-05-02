import { useEffect, useState } from "react";

export default function VideoBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: "fixed",
        top: "-20%",
        left: "-20%",
        width: "140%",
        height: "140%",
        objectFit: "cover",

        // 🔥 THIS IS THE MAGIC
        transform: `translateY(${scrollY * 0.07}px) scale(1.1)`,

        zIndex: -2,
        filter: "brightness(0.4) contrast(1.2) saturate(1.3)",
        transition: "transform 0.1s linear"
      }}
    >
      <source src="/tangit1_onebright.mp4" type="video/mp4" />
    </video>
  );
}