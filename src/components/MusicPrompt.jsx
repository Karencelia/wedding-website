import { useState, useEffect } from "react";
import weddingData from "../data/weddingData";

export default function MusicPrompt() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasChosen = sessionStorage.getItem("musicChoice");
    if (!hasChosen) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (withMusic) => {
    sessionStorage.setItem("musicChoice", withMusic ? "yes" : "no");
    setShow(false);

    if (withMusic) {
      window.dispatchEvent(new CustomEvent("toggleMusic", { detail: { play: true } }));
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/80 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center animate-scale-in">
        {/* Music Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
          <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        </div>

        <h3 className="font-heading text-2xl sm:text-3xl text-charcoal mb-2">
          Welcome to Our Wedding
        </h3>
        <p className="font-body text-sm text-warm-gray mb-2">
          {weddingData.groom.firstName} & {weddingData.bride.firstName}
        </p>
        <p className="font-body text-xs text-warm-gray-light mb-8">
          Would you like to enjoy our story with background music?
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => handleChoice(true)}
            className="flex-1 btn-primary flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 10a1 1 0 011-1h1a1 1 0 011 1v4a1 1 0 01-1 1h-1a1 1 0 01-1-1v-4z" />
            </svg>
            With Music
          </button>
          <button
            onClick={() => handleChoice(false)}
            className="flex-1 btn-outline flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
            Without Music
          </button>
        </div>
      </div>
    </div>
  );
}
