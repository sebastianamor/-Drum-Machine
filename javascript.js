function App() {
    const playSound = (audioId) => {
      const audio = document.getElementById(audioId);
      if (audio) {
        audio.currentTime = 0; // Reinicia el audio
        audio.play();
      }
    };
  
    return (
      <div id="drum-machine">
        <button className="drum-pad" id="Heater1" onClick={() => playSound('audio1')}>Q
          <audio id="audio1" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3 "></audio>
        </button>
        <button className="drum-pad" id="Heater2" onClick={() => playSound('audio2')}>W
          <audio id="audio2" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio>
        </button>
        <button className="drum-pad" id="Heater3" onClick={() => playSound('audio3')}>E
          <audio id="audio3" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>
        </button>
        <button className="drum-pad" id="Heater3" onClick={() => playSound('audio3')}>A
          <audio id="audio3" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>
        </button>
        {/* Puedes agregar más botones siguiendo este patrón */}
        <div id="display"></div>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));