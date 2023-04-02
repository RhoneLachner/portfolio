import React, { useState, useRef } from "react";
import audio from './music/rhone-song.mp3';
import pauseIcon from './images/pause-icon-grey.png';
import playIcon from './images/play-icon-grey.png';
import './App.css';


const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

//original audio file is too loud
  const setVolumeToHalf = () => {
    audioRef.current.volume = 0.12;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      setVolumeToHalf();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={audio}  />
      <img
      className="playPauseRadio"
        src={isPlaying ? pauseIcon : playIcon}
        alt={isPlaying ? "Pause" : "Play"}
        onClick={togglePlayPause}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default AudioPlayer;






// class AudioTest extends React.Component{

  // playAudio = () => {
  //   new Audio(audio).play();
  // }

  // render() {
  //   return (
  //       <div>
  //           <label for="sad"><img src={playPause} className="playPause" alt="play-audio" />
  //             <input type="checkbox"  name="audio" className="playPauseRadio" id="audio" onChange={this.playAudio} />
  //           </label>
  //       </div>
  //   );
  // }
// }

// export default AudioTest;


// <html>
// <head>
//     <style>
//         /* Add your CSS styling here */
//     </style>
// </head>
// <body>
//     <audio id="myAudio"  src={audio} type="audio/mpeg">
//     </audio>
//     <img id="playPauseButton" src="play-icon.png" onclick="playAudio()" style="cursor:pointer;" ></img>
//     <script>
//         function playAudio() {
//             document.getElementById("myAudio").play()
//         }
//     </script>
// </body>
// </html>
