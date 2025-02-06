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
      <label class="switch"/>
   <input type="checkbox" />
   <span class="slider"></span>
      
      <button className="drum-pad" id="Heater1" onClick={() => playSound('audio1')}>Q
        <audio  className="clip"   id="audio1" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>
      </button>
      
      <button className="drum-pad" id="Heater2" onClick={() => playSound('audio2')}>W
        <audio  className="clip"   id="audio2" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3 "></audio>
      </button>
      
      <button className="drum-pad" id="Heater3" onClick={() => playSound('audio3')}>E
        <audio  className="clip"   id="audio3" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3 "></audio>
      </button>
      
      <button className="drum-pad" id="Heater4" onClick={() => playSound('audio4')}>A
        <audio className="clip"    id="audio4" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio>
      </button>
      
      <button className="drum-pad" id="Clap" onClick={() => playSound('audio5')}>S
        <audio  className="clip"   id="audio5" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3  "></audio>
      </button>
      
      <button className="drum-pad" id="OpenHH" onClick={() => playSound('audio6')}>D
        <audio  className="clip"   id="audio6" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio>
      </button>
      
     <button className="drum-pad" id="KicknHat" onClick={() => playSound('audio7')}>Z
        <audio  className="clip"   id="audio7" src=" https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3 "></audio>
      </button>
      
      <button className="drum-pad" id="Kick" onClick={() => playSound('audio8')}>X
        <audio  className="clip"    id="audio8" src=" https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3  "></audio>
      </button>
      
     <button className="drum-pad" id="ClosedHH" onClick={() => playSound('audio9')}>C
        <audio  className="clip"   id="audio9" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio>
      </button>
      {/* Puedes agregar más botones siguiendo este patrón */}
      <div id="display"></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
