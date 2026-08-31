import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import weddingData from "../data/weddingData";

function calculateTimeLeft() {
  const weddingDate = new Date(weddingData.weddingDate).getTime();
  const now = new Date().getTime();
  const difference = weddingDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
}

function TimeUnit({ value, label, inView, delay }) {
  return (
    <div
      className={`flex flex-col items-center transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full border border-gold/20 flex items-center justify-center bg-white/50 backdrop-blur-sm">
          <span className="font-heading text-2xl sm:text-3xl md:text-5xl text-charcoal">
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="font-body text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-warm-gray mt-2 sm:mt-3">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: "Days", delay: 0 },
    { value: timeLeft.hours, label: "Hours", delay: 100 },
    { value: timeLeft.minutes, label: "Minutes", delay: 200 },
    { value: timeLeft.seconds, label: "Seconds", delay: 300 },
  ];

  return (
    <section id="countdown" ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-cream to-cream-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Header */}
        <p
          className={`font-body text-xs uppercase tracking-[0.3em] text-warm-gray mb-3 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Counting Down To
        </p>
        <h2
          className={`font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-12 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Our Special Day
        </h2>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-10 max-w-sm sm:max-w-md md:max-w-lg mx-auto">
          {units.map((unit) => (
            <TimeUnit
              key={unit.label}
              value={unit.value}
              label={unit.label}
              inView={inView}
              delay={unit.delay + 300}
            />
          ))}
        </div>

        {/* Decorative separator */}
        <div
          className={`mt-12 transition-all duration-1000 delay-700 ${
            inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-[1px] bg-gold/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold/30" />
            <div className="w-16 h-[1px] bg-gold/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
