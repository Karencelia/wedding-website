import { useState, useRef, useEffect } from "react";
import weddingData from "../data/weddingData";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (weddingData.music.audioFile) {
      audioRef.current = new Audio(weddingData.music.audioFile);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;

      audioRef.current.addEventListener("error", () => {
        console.warn("Audio file could not be loaded.");
      });
    }

    const handleToggle = (e) => {
      if (e.detail?.play && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setShowTooltip(true);
          setTimeout(() => setShowTooltip(false), 3000);
        });
      }
    };

    window.addEventListener("toggleMusic", handleToggle);
    return () => {
      window.removeEventListener("toggleMusic", handleToggle);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current || !weddingData.music.audioFile) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
      return;
    }

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }
  };

  if (!weddingData.music.enabled) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-charcoal text-white text-xs font-body rounded-lg whitespace-nowrap animate-fade-in-down">
          {!weddingData.music.audioFile
            ? "Add an audio file path in weddingData.js"
            : "Click to play music"}
          <div className="absolute top-full right-4 w-2 h-2 bg-charcoal transform rotate-45 -translate-y-1" />
        </div>
      )}

      <button
        onClick={togglePlay}
        className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/80 backdrop-blur-md border border-gold-light/40 shadow-lg hover:shadow-xl hover:border-gold/50 flex items-center justify-center transition-all duration-300 hover:scale-105"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying && (
          <div className="absolute inset-0 rounded-full border border-gold/20 animate-ping" />
        )}

        {isPlaying ? (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold group-hover:text-gold-dark transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </div>
  );
}
