import { useInView } from "react-intersection-observer";
import weddingData from "../data/weddingData";

export default function Hashtag() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const copyHashtag = () => {
    navigator.clipboard.writeText(weddingData.hashtag).then(() => {
      alert(`Copied: ${weddingData.hashtag}`);
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = weddingData.hashtag;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert(`Copied: ${weddingData.hashtag}`);
    });
  };

  return (
    <section id="hashtag" ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-cream to-cream-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p
          className={`font-body text-xs uppercase tracking-[0.3em] text-warm-gray mb-3 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Share Your Moments
        </p>
        <h2
          className={`font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-6 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Wedding Hashtag
        </h2>

        <div
          className={`inline-block transition-all duration-700 delay-400 ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <button
            onClick={copyHashtag}
            className="group relative px-8 py-4 bg-white/60 border border-rose-light/40 rounded-lg hover:border-rose-dusty/50 hover:bg-white/80 transition-all duration-300 cursor-pointer"
          >
            <span className="font-heading text-2xl sm:text-3xl md:text-4xl text-rose-dusty group-hover:text-rose-dark transition-colors">
              {weddingData.hashtag}
            </span>
            <div className="mt-2 flex items-center justify-center gap-2">
              <svg className="w-3 h-3 text-warm-gray-light group-hover:text-rose-dusty transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              <span className="font-body text-[10px] uppercase tracking-wider text-warm-gray-light group-hover:text-rose-dusty transition-colors">
                Click to copy
              </span>
            </div>
          </button>
        </div>

        <p
          className={`font-body text-sm text-warm-gray mt-6 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Use this hashtag when posting about the wedding on social media
        </p>
      </div>
    </section>
  );
}
