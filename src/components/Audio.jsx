import "./AudioPage.css";
import React, { useRef, useState } from "react";
import { faMusic, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Audio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="audio-page">
    
      <button className=" btnaudio" onClick={toggleAudio}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} /> <FontAwesomeIcon icon={faMusic}  /> <FontAwesomeIcon icon={faMusic}  />
        <span>{isPlaying ? ' ' : ' '}</span>
      </button>
      <audio ref={audioRef} src="/belliver.mp3" loop />

    </div>
  );
};

export default Audio;
