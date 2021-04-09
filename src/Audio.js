import React from "react";
import audio from './music/rhone-song.mp3';
import playPause from './images/play-only.png';
import './App.css';

class AudioTest extends React.Component{

  playAudio = () => {
    new Audio(audio).play();
  }

  render() {
    return (
        <div>
            <label for="sad"><img src={playPause} className="playPause" alt="play-audio" />
              <input type="checkbox"  name="emotion" className="playPauseRadio" id="audio" onChange={this.playAudio}/>
            </label>
        </div>
    );
  }
}

export default AudioTest;
