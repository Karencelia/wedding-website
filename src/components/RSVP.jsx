import { useState } from "react";
import { useInView } from "react-intersection-observer";
import weddingData from "../data/weddingData";

export default function RSVP() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    guestName: "",
    email: "",
    phone: "",
    numberOfGuests: "1",
    attendance: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend/API when ready
    console.log("RSVP Data:", formData);
    setSubmitted(true);
  };

  return (
    <section id="rsvp" ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-cream to-cream-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className={`font-body text-xs uppercase tracking-[0.3em] text-warm-gray mb-3 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We Would Love to Hear From You
          </p>
          <h2
            className={`font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal mb-4 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            RSVP
          </h2>
          <div
            className={`transition-all duration-1000 delay-400 ${
              inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-rose-dusty/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-rose-dusty/40" />
              <div className="w-12 h-[1px] bg-rose-dusty/40" />
            </div>
          </div>
          {weddingData.rsvp.deadline && (
            <p className="font-body text-sm text-warm-gray">
              Please respond by <span className="text-charcoal font-medium">{weddingData.rsvp.deadlineDisplay}</span>
            </p>
          )}
          {!weddingData.rsvp.backendEndpoint && (
            <p className="font-body text-xs text-rose-dusty mt-4 italic">
              * RSVP submission will be connected to a backend service soon.
            </p>
          )}
        </div>

        {/* RSVP Form */}
        <div
          className={`glass-card transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-rose-dusty flex items-center justify-center">
                <svg className="w-8 h-8 text-rose-dusty" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl text-charcoal mb-2">Thank You!</h3>
              <p className="font-body text-warm-gray">
                Your response has been recorded. We look forward to celebrating with you!
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    guestName: "",
                    email: "",
                    phone: "",
                    numberOfGuests: "1",
                    attendance: "",
                    message: "",
                  });
                }}
                className="mt-6 btn-outline text-xs"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Guest Name */}
              <div>
                <label htmlFor="guestName" className="block font-body text-xs uppercase tracking-wider text-warm-gray mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="guestName"
                  name="guestName"
                  value={formData.guestName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-rose-light/50 rounded font-body text-sm text-charcoal placeholder-warm-gray-light focus:outline-none focus:border-rose-dusty focus:ring-1 focus:ring-rose-dusty/20 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block font-body text-xs uppercase tracking-wider text-warm-gray mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/60 border border-rose-light/50 rounded font-body text-sm text-charcoal placeholder-warm-gray-light focus:outline-none focus:border-rose-dusty focus:ring-1 focus:ring-rose-dusty/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-body text-xs uppercase tracking-wider text-warm-gray mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/60 border border-rose-light/50 rounded font-body text-sm text-charcoal placeholder-warm-gray-light focus:outline-none focus:border-rose-dusty focus:ring-1 focus:ring-rose-dusty/20 transition-all"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label htmlFor="numberOfGuests" className="block font-body text-xs uppercase tracking-wider text-warm-gray mb-2">
                  Number of Guests *
                </label>
                <select
                  id="numberOfGuests"
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-rose-light/50 rounded font-body text-sm text-charcoal focus:outline-none focus:border-rose-dusty focus:ring-1 focus:ring-rose-dusty/20 transition-all appearance-none cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Attendance */}
              <div>
                <label className="block font-body text-xs uppercase tracking-wider text-warm-gray mb-3">
                  Will you be attending? *
                </label>
                <div className="flex gap-4">
                  {[
                    { value: "yes", label: "Joyfully Accept" },
                    { value: "no", label: "Regretfully Decline" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex-1 flex items-center justify-center gap-3 px-4 py-3 border rounded cursor-pointer transition-all duration-300 ${
                        formData.attendance === option.value
                          ? "border-rose-dusty bg-rose-light/20 text-charcoal"
                          : "border-rose-light/50 bg-white/60 text-warm-gray hover:border-rose-dusty/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value={option.value}
                        checked={formData.attendance === option.value}
                        onChange={handleChange}
                        required
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                          formData.attendance === option.value
                            ? "border-rose-dusty"
                            : "border-warm-gray-light"
                        }`}
                      >
                        {formData.attendance === option.value && (
                          <div className="w-2 h-2 rounded-full bg-rose-dusty" />
                        )}
                      </div>
                      <span className="font-body text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-body text-xs uppercase tracking-wider text-warm-gray mb-2">
                  Message or Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/60 border border-rose-light/50 rounded font-body text-sm text-charcoal placeholder-warm-gray-light focus:outline-none focus:border-rose-dusty focus:ring-1 focus:ring-rose-dusty/20 transition-all resize-none"
                  placeholder="Share your well-wishes or let us know of any dietary requirements..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Your Response
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
