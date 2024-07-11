import About from "./components/About";
import Eyes from "./components/Eyes";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="w-full relative z-2">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
    </main>
  );
}

export default App;
