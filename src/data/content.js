// export const content = {
//   hero: {
//     name: "Tanuj Sampat",
//     title: "Electronics & Communication Engineer",
//     tagline: "Turning signals into systems"
//   },

 
//   projects: [
//     {
//       name: "Wildlife Tracking Collar",
//       desc: "LoRaWAN-based tracking with GPS and geofence alerts.",
//       github: "https://github.com/yourlink",

//       terminal: [
//         "initializing project...",
//         "loading hardware modules...",
//         "syncing GPS...",
//         ".............",
//         "ready.",
//         "LoRaWAN-based tracking with GPS and geofence alerts."
//       ]
//     },

//     {
//       name: "Smart Stick",
//       desc: "Assistive navigation device for blind and elderly.",
//       github: "https://github.com/yourlink",

//       terminal: [
//         "initializing project...",
//         "calibrating sensors...",
//         "activating feedback system...",
//         ".............",
//         "ready.",
//         "Assistive navigation device for blind and elderly."
//       ]
//     }
//   ],


//   skills: [
//     {
//       id: "core",
//       label: "Core Systems",
//       color: "#ff00d0",
//       terminal: [
//         "initializing module...",
//         "loading signal processors...",
//         "calibrating control systems...",
//         ".............",
//         "ready.",
//         "I design systems, not just code.",
//         "Signal processing is where I think clearly.",
//         "Control systems feel intuitive."
//       ]
//     },

//     {
//       id: "coding",
//       label: "Programming",
//       color: "#ffaa00",
//       terminal: [
//         "initializing module...",
//         "loading runtime...",
//         "compiling logic...",
//         ".............",
//         "ready.",
//         "Python for speed, C/C++ for control.",
//         "I debug more than I write — intentionally.",
//         "Clean logic > clever hacks."
//       ]
//     },

//     {
//       id: "hardware",
//       label: "Hardware",
//       color: "#ff6600",
//       terminal: [
//         "initializing module...",
//         "detecting peripherals...",
//         "booting microcontrollers...",
//         ".............",
//         "ready.",
//         "ESP32 is my default environment.",
//         "If a circuit fails, I trace it.",
//         "Sensors are just raw data waiting to be shaped."
//       ]
//     },

//     {
//       id: "performance",
//       label: "Performance",
//       color: "#3399ff",
//       terminal: [
//         "initializing module...",
//         "profiling execution...",
//         "optimizing latency...",
//         ".............",
//         "ready.",
//         "Real-time systems > theoretical models.",
//         "Latency matters more than aesthetics.",
//         "Optimization is part of design, not afterthought."
//       ]
//     },

//     {
//       id: "energy",
//       label: "Energy",
//       color: "#ff9900",
//       terminal: [
//         "initializing module...",
//         "checking energy levels...",
//         "stabilizing focus...",
//         ".............",
//         "ready.",
//         "Focus > motivation.",
//         "Consistency beats bursts.",
//         "Energy is managed, not assumed."
//       ]
//     },

//     {
//       id: "debug",
//       label: "Debug Mindset",
//       color: "#ff3333",
//       terminal: [
//         "initializing module...",
//         "detecting anomalies...",
//         "isolating faults...",
//         ".............",
//         "ready.",
//         "If it works instantly, I verify it twice.",
//         "Bugs are just undocumented behavior.",
//         "Persistence solves more than knowledge."
//       ]
//     }
//   ],

 
  
//   logs: [
//     "I swim faster than you walk.",
//     "If it works first try, I don’t trust it.",
//     "ChatGPT writes the code, I debug the reality.",
//     "Circuits fail. I don’t.",
//     "Sleep cycle: undefined behavior.",
//     "I optimize systems I didn’t even build.",
//     "Hardware > theory, always.",
//     "Debugging is reverse engineering your own mistakes."
//   ],

//   metrics: [
//     "I swim faster than you walk",
//     "Debugging > Coding",
//     "Sleep cycle: unstable",
//     "Signals > assumptions",
//     "Circuits burnt: acceptable"
//   ]
// };

export const content = {
  projects: [
    
    {
      name: "DeskBot: Posture Correction Chair",
      desc: "ML-powered FSR pressure mapping for real-time posture classification.",
      github: "https://github.com/tanujsampat/project-portfolio/tree/c5e04c168170cde8753c138557892d8423cb8e4a/Deskbot_Correction",
      terminal: [
        "loading FSR sensor array...",
        "extracting pressure features...",
        "training classification model...",
        ".............",
        "ready.",
        "Real-time feedback. Multi-user dataset. Hardware meets ML."
      ]
    },
    {
      name: "AI Dual Axis Solar Tracker",
      desc: "Closed-loop LDR + servo system that maximizes solar capture autonomously.",
      github: "https://github.com/tanujsampat/project-portfolio/tree/c5e04c168170cde8753c138557892d8423cb8e4a/Solar_Tracker",
      terminal: [
        "initializing LDR sensor array...",
        "engaging servo control loop...",
        "locking optimal panel angle...",
        ".............",
        "ready.",
        "Closed-loop. Always aligned. Static panels are obsolete."
      ]
    },
    {
      name: "Hardware Stopwatch (No MCU)",
      desc: "Pure sequential logic — crystal oscillator to 7-seg display. Zero firmware.",
      github: "https://github.com/tanujsampat/project-portfolio/tree/c5e04c168170cde8753c138557892d8423cb8e4a/Digital_Stopwatch_Hardware",
      terminal: [
        "syncing 32.768 kHz oscillator...",
        "dividing clock via CD4060...",
        "driving MOD-60 / MOD-12 counters...",
        ".............",
        "ready.",
        "No firmware. No abstraction. Just clean sequential logic."
      ]
    },
    {
      name: "Advanced Smart Stick",
      desc: "Servo-mounted ToF sensor with GPS and BT — obstacle detection up to 2m.",
      github: "https://github.com/tanujsampat/project-portfolio/tree/c5e04c168170cde8753c138557892d8423cb8e4a/Smart_stick",
      terminal: [
        "mounting VL53L0X ToF sensor...",
        "initializing servo scan loop...",
        "linking GPS and BT modules...",
        ".............",
        "ready.",
        "2m range. Dynamic mapping. LiDAR cost without LiDAR."
      ]
    },
    {
      name: "Wildlife Tracking Collar",
      desc: "LoRaWAN GPS collar with mesh comms and geofence anti-poaching alerts.",
      github: "https://github.com/tanujsampat/project-portfolio/tree/c5e04c168170cde8753c138557892d8423cb8e4a/Wild_Animal_Collar_Band",
      terminal: [
        "initializing LoRaWAN stack...",
        "syncing GPS + IMU...",
        "configuring geofence boundaries...",
        ".............",
        "ready.",
        "Top 8 / 150+ teams. Low power. Long range. Deployed logic."
      ]
    },
    {
      name: "Line Follower Robot",
      desc: "ESP32 + 10-element IR array with live BT PID tuning dashboard.",
      github: "https://github.com/tanujsampat/project-portfolio/tree/c5e04c168170cde8753c138557892d8423cb8e4a/Fast_Line_Follower",
      terminal: [
        "loading 10-sensor IR array...",
        "initializing PID state machine...",
        "connecting BT tuning interface...",
        ".............",
        "ready.",
        "Competition-grade speed. Tuned live. Zero manual recompiles."
      ]
    },
    {
      name: "Hidden Camera Detector (EMF)",
      desc: "Custom helix antenna + FFT spectral analysis to passively detect surveillance devices.",
      github: "https://github.com/tanujsampat/project-portfolio/tree/97d124358bc69d2f3996d5e8caf4ab5a4fd4c962/Hidden_Camera_Detector",
      terminal: [
        "winding custom helix antenna...",
        "sampling EM signatures via ESP32 ADC...",
        "running FFT spectral scan...",
        ".............",
        "ready.",
        "Passive detection. No false negatives tolerated."
      ]
    },
    {
      name: "Home Automation System",
      desc: "ESP32 IoT hub — voice control, scheduling, relay switching via Blynk.",
      github: "https://github.com/tanujsampat/project-portfolio/tree/c5e04c168170cde8753c138557892d8423cb8e4a/Smart_Home_Blynk_IoT",
      terminal: [
        "linking ESP32 Wi-Fi + BT...",
        "configuring relay and DHT interfaces...",
        "syncing Blynk cloud dashboard...",
        ".............",
        "ready.",
        "Dual-mode comms. Manual override always available."
      ]
    },{
      name: "FFT Based 5-Band Audio Equalizer",
      desc: "Real-time N-point FFT equalizer with zero-phase band separation.",
      github: "https://github.com/tanujsampat/project-portfolio/tree/97d124358bc69d2f3996d5e8caf4ab5a4fd4c962/5_Band_Equilizer",
      terminal: [
        "initializing FFT engine...",
        "mapping 5 frequency bands...",
        "calibrating dB gain control...",
        ".............",
        "ready.",
        "Zero phase distortion. Outperforms IIR Butterworth by design."
      ]
    }
  ],

  skills: [
    {
      id: "core",
      label: "Core Systems",
      color: "#00FFB2",
      terminal: [
        "initializing module...",
        "loading system architecture...",
        "linking hardware-software boundary...",
        ".............",
        "ready.",
        "I design systems end-to-end, not just components.",
        "If the hardware is wrong, software can't save it.",
        "I build for real-world constraints, not lab conditions."
      ]
    },
    {
      id: "coding",
      label: "Programming",
      color: "#ffaa00",
      terminal: [
        "initializing module...",
        "loading runtime...",
        "compiling logic...",
        ".............",
        "ready.",
        "Python for speed, C/C++ for control.",
        "I debug more than I write — intentionally.",
        "Clean logic > clever hacks."
      ]
    },
    {
      id: "hardware",
      label: "Hardware",
      color: "#ff6600",
      terminal: [
        "initializing module...",
        "enumerating peripherals...",
        "validating schematic integrity...",
        ".............",
        "ready.",
        "I read datasheets before writing drivers.",
        "If I can't scope it, I don't trust it.",
        "Breadboards are for prototypes. PCBs are for real."
      ]
    },
    {
      id: "signals",
      label: "Signal Processing",
      color: "#A259FF",
      terminal: [
        "initializing module...",
        "loading FFT engine...",
        "calibrating frequency domain...",
        ".............",
        "ready.",
        "I analyze in frequency domain by default.",
        "Real-time DSP on embedded — no MATLAB safety net.",
        "Spectral leakage is a sign of lazy windowing."
      ]
    },
    {
      id: "debug",
      label: "Debug Mindset",
      color: "#ff3333",
      terminal: [
        "initializing module...",
        "tracing fault vectors...",
        "isolating failure domain...",
        ".............",
        "ready.",
        "I start from first principles, not Stack Overflow.",
        "Every bug has a root cause. I find it.",
        "Debugging is where real understanding happens."
      ]
    },
    {
      id: "energy",
      label: "Work Style",
      color: "#3399ff",
      terminal: [
        "initializing module...",
        "loading operational parameters...",
        "setting execution mode...",
        ".............",
        "ready.",
        "I ship hardware at deadlines, not excuses.",
        "Sleep cycle: undefined. Build cycle: always running.",
        "Competitions are just deadlines with stakes."
      ]
    }
  ],

  logs: [
    "If it works first try, I don't trust it.",
    "ChatGPT writes the code, I debug the reality.",
    "Circuits fail. I don't.",
    "Sleep cycle: undefined behavior.",
    "I optimize systems I didn't even build.",
    "Hardware > theory, always.",
    "Debugging is reverse engineering your own mistakes.",
    "Read the datasheet. All of it.",
    "Scope out first, guess never.",
    "Latency is a design decision, not a surprise.",
    "FFT first. Ask questions later.",
    "My code compiles. My hardware does too.",
    "Deadlines are just real-time constraints.",
    "Ground loops are the enemy. I've met them.",
    "Works on my bench. Works in the field.",
    "Abstraction is a privilege. I earn it."
  ],

  metrics: [
    "I swim faster than I context-switch",
    "Debugging > Coding",
    "Sleep cycle: unstable",
    "Signals > assumptions",
    "Circuits burnt: acceptable",
    "Scope traces don't lie",
    "Datasheets read: many"
  ]
};