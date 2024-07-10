import { useGSAP } from "@gsap/react";
import "./App.css";
import gsap from "gsap";
import { useRef, useState } from "react";
function App() {
  const [circle, setCircle] = useState(0);
  const random = gsap.utils.random(-500, 500, 100);
  useGSAP(() => {
    console.log(circle);
    gsap.to(".circle", {
      x: circle,
      duration: 1,
    });
  }, [circle]);
  return (
    <main>
      <button
        onClick={() => {
          setCircle(random);
        }}
      >
        Click
      </button>
      <div className="circle"></div>
    </main>
  );
}

export default App;
