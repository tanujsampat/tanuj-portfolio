import VideoBackground from "./components/VideoBackground";
import SignalCursor from "./components/SignalCursor";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SignalLogs from "./components/SignalLogs";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
export default function App() {
  return (
    <div style={{ position: "relative", minHeight:"300vh" }}>

      {/* VIDEO BACKGROUND */}
      <VideoBackground />

      {/* DARK OVERLAY */}
      <div style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0, 20, 10, 0.6)",
        zIndex: -1
      }} />

      <SignalCursor />

     
      <Hero />

      <Projects />
      <Skills />
      
      <SignalLogs />
      <Contact />


    </div>
  );
}