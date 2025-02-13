function App() {
  const pads = [
    { key: "Q", id: "Heater 1", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" },
    { key: "W", id: "Heater 2", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" },
    { key: "E", id: "Heater 3", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" },
    { key: "A", id: "Heater 4", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" },
    { key: "S", id: "Clap", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" },
    { key: "D", id: "Open-HH", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" },
    { key: "Z", id: "Kick-n-Hat", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" },
    { key: "X", id: "Kick", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" },
    { key: "C", id: "Closed-HH", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" },
  ];

  const [displayText, setDisplayText] = React.useState("");
  const [isSoundOn, setIsSoundOn] = React.useState(true);

  React.useEffect(() => {
    const handleKeyPress = (event) => {
      const pad = pads.find((p) => p.key === event.key.toUpperCase());
      if (pad) playSound(pad.key, pad.id);
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isSoundOn]);

  const playSound = (audioId, displayText) => {
    if (!isSoundOn) return;

    const audio = document.getElementById(audioId);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setDisplayText(displayText);
    }
  };

  return (
    <div id="drum-machine">
      ドラムの音
      <div id="display">{displayText}</div>

      {/* Interruptor de encendido/apagado del sonido */}
      <label className="switch" >
        <input
          type="checkbox"
          checked={isSoundOn}
          onChange={() => setIsSoundOn(!isSoundOn)}
        />
        <span className="toggle"  >
          
          <span className="left">OFF</span>
          <span className="right">ON</span>
        </span>
      </label>

      {/* Botones de los sonidos */}
      {pads.map((pad) => (
        <button
          key={pad.key}
          className="drum-pad"
          id={pad.id}
          onClick={() => playSound(pad.key, pad.id)}
        >
          {pad.key}
          <audio className="clip" id={pad.key} src={pad.src}></audio>
        </button>
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

