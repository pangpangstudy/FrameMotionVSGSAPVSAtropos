import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] text-white font-serif">
      <div className="text border-b-2 border-t-2 border-[#4D837C] flex  whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className="text-[22vw] leading-[0.8] uppercase mb-4 pt-1 font-semibold pr-20 text-shadow-3d"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className="text-[22vw] leading-[0.8] uppercase mb-4 pt-1 font-semibold pr-20 text-shadow-3d"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
          className="text-[22vw] leading-[0.8] uppercase mb-4 pt-1 font-semibold pr-20 text-shadow-3d"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
