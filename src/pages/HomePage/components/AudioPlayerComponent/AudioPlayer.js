import React, { useState, useRef } from "react";
import audio from "../../../../assets/audio/rhone-song.mp3";
import pauseIcon from "../../../../assets/images/audio-player-pause-icon.webp";
import playIcon from "../../../../assets/images/audio-player-play-icon.webp";
import "./audioPlayer.css";

// Audio Player component for a single song with play and pause functionality,
// surrounded by a circlular text animation

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
      <audio ref={audioRef} src={audio} />
      <img
        className="playPauseContainer"
        src={isPlaying ? pauseIcon : playIcon}
        alt={isPlaying ? "Pause" : "Play"}
        onClick={togglePlayPause}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default AudioPlayer;
