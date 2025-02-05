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
        <audio  className="clip"   id="audio1" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
      </button>
      
      <button className="drum-pad" id="Heater2" onClick={() => playSound('audio2')}>W
        <audio  className="clip"   id="audio2" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"></audio>
      </button>
      
      <button className="drum-pad" id="Heater3" onClick={() => playSound('audio3')}>E
        <audio  className="clip"   id="audio3" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"></audio>
      </button>
      
      <button className="drum-pad" id="Heater4" onClick={() => playSound('audio3')}>A
        <audio className="clip"    id="audio3" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"></audio>
      </button>
      
      <button className="drum-pad" id="Clap" onClick={() => playSound('audio3')}>S
        <audio  className="clip"   id="audio3" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"></audio>
      </button>
      
      <button className="drum-pad" id="OpenHH" onClick={() => playSound('audio3')}>D
        <audio  className="clip"   id="audio3" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"></audio>
      </button>
      
     <button className="drum-pad" id="KicknHat" onClick={() => playSound('audio3')}>Z
        <audio  className="clip"   id="audio3" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"></audio>
      </button>
      
      <button className="drum-pad" id="Kick" onClick={() => playSound('audio3')}>X
        <audio  className="clip"    id="audio3" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"></audio>
      </button>
      
     <button className="drum-pad" id="ClosedHH" onClick={() => playSound('audio3')}>C
        <audio  className="clip"   id="audio3" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"></audio>
      </button>
      {/* Puedes agregar más botones siguiendo este patrón */}
      <div id="display"></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
