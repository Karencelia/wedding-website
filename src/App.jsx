import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import OurStory from "./components/OurStory";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
// import RSVP from "./components/RSVP";
import GiftRegistry from "./components/GiftRegistry";
import Location from "./components/Location";
import FAQ from "./components/FAQ";
import Hashtag from "./components/Hashtag";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <OurStory />
        <EventDetails />
        <Gallery />
        {/* <RSVP /> */}
        <GiftRegistry />
        <Location />
        <FAQ />
        <Hashtag />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
}
