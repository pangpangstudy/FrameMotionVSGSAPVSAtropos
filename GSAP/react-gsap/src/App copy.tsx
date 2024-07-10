import { useGSAP } from "@gsap/react";
import "./App.css";
import gsap from "gsap";
import { useRef } from "react";
function App() {
  const circleRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      // gsap.from(boxRef.current, {
      //   opacity: 0,
      //   rotate: 360,
      //   duration: 2,
      //   borderRadius: "50%",
      //   delay: 1,
      //   repeat: -1,
      // });
      gsap.to(boxRef, {
        opacity: 0,
        rotate: 360,
        duration: 2,
        borderRadius: "50%",
        delay: 1,
        repeat: -1,
      });
    },
    { scope: containerRef }
  );
  return (
    <main>
      <div ref={containerRef} className="container">
        <div className="circle"></div>
        <div ref={boxRef} className="box"></div>
      </div>
      <div className="kuch">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  );
}

export default App;
