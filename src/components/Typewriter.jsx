import { useEffect, useState } from "react";

export default function Typewriter({ lines = [] }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayed, setDisplayed] = useState([]);

  const currentLine = lines[lineIndex] || "";

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    let delay = 50; // default typing speed

    // 🔥 SPECIAL CASE: AFTER "compiling"
    if (currentLine === ".............") {
      delay = 300; // slower dots
    }

    if (currentLine === "ready.") {
      delay = 100; // slower reveal for effect
    }

    const timeout = setTimeout(() => {
      if (charIndex < currentLine.length) {
        setCharIndex((prev) => prev + 1);
      } else {
        setDisplayed((prev) => [...prev, currentLine]);

        // 🔥 ADD DELAY BEFORE NEXT LINE
        const extraDelay =
          currentLine === "............." ? 400 : 100;

        setTimeout(() => {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, extraDelay);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, lines]);

  return (
    <div style={{ fontFamily: "monospace",fontSize :" 20px", color: "#00ffcc" }}>
      {displayed.map((line, i) => (
        <div key={i}>{"> " + line}</div>
      ))}

      {lineIndex < lines.length && (
        <div>
          {"> "}
          {currentLine.slice(0, charIndex)}
          <span style={{ opacity: 0.6 }}>|</span>
        </div>
      )}
    </div>
  );
}