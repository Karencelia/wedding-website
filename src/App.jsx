import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import OurStory from "./components/OurStory";
// import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import GiftRegistry from "./components/GiftRegistry";
import Location from "./components/Location";
import Hashtag from "./components/Hashtag";
import MusicPlayer from "./components/MusicPlayer";
import MusicPrompt from "./components/MusicPrompt";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <MusicPrompt />
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <OurStory />
        {/* <Gallery /> */}
        <RSVP />
        <GiftRegistry />
        <Location />
        <Hashtag />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
}
