import { useInView } from "react-intersection-observer";
import weddingData from "../data/weddingData";
import heroImage from "../assets/images/hero-image.jpeg";

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToRSVP = (e) => {
    e.preventDefault();
    document.querySelector("#rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToLocation = (e) => {
    e.preventDefault();
    document.querySelector("#location")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex items-start justify-center"
    >
      {/* Background Image - drives section height naturally */}
      <img
        src={heroImage}
        alt="Bride and Groom"
        className="w-full h-auto block"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/40 to-charcoal/60" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 sm:-top-32 sm:-left-32 sm:w-64 sm:h-64 rounded-full border border-white/10" />
        <div className="absolute -top-16 -left-16 w-32 h-32 sm:-top-24 sm:-left-24 sm:w-48 sm:h-48 rounded-full border border-white/5" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 sm:-bottom-32 sm:-right-32 sm:w-80 sm:h-80 rounded-full border border-white/10" />
        <div className="absolute -bottom-16 -right-16 w-36 h-36 sm:-bottom-24 sm:-right-24 sm:w-60 sm:h-60 rounded-full border border-white/5" />
        <div className="absolute top-1/4 left-4 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20 animate-pulse-soft" />
        <div className="absolute top-1/3 right-4 sm:right-16 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-white/15 animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 rounded-full bg-white/10 animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start text-center px-5 sm:px-6 pt-28 pb-16">
        {/* Ornamental line */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <div className="w-8 sm:w-12 h-[1px] bg-white/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <div className="w-8 sm:w-12 h-[1px] bg-white/40" />
          </div>
        </div>

        {/* Welcome text */}
        <p
          className={`font-body text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/80 mb-6 sm:mb-8 transition-all duration-700 delay-300 px-2 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {weddingData.welcomeMessage}
        </p>

        {/* Names */}
        <h1
          className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-2 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="block">{weddingData.groom.firstName}</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gold-light my-1 sm:my-3 font-light italic">
            &
          </span>
          <span className="block">{weddingData.bride.firstName}</span>
        </h1>

        {/* Date */}
        <p
          className={`font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 mt-4 sm:mt-6 mb-8 sm:mb-10 transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {weddingData.weddingDateDisplay}
        </p>

        {/* Ornamental line */}
        <div
          className={`transition-all duration-1000 delay-800 ${
            inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
            <div className="w-8 sm:w-12 h-[1px] bg-white/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <div className="w-8 sm:w-12 h-[1px] bg-white/40" />
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* <button onClick={scrollToRSVP} className="btn-primary w-full sm:w-auto">
            RSVP Now
          </button> */}
          <button
            onClick={(e) => { e.preventDefault(); document.querySelector("#gifts")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-primary w-full sm:w-auto"
          >
            Gift Registry
          </button>
          <button
            onClick={scrollToLocation}
            className="inline-block px-8 py-3 border border-white/60 text-white font-body font-medium text-sm uppercase tracking-wider rounded-sm hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
          >
            View Location
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
