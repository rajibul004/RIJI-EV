import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const SplashScreen = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-400/30 blur-[180px] rounded-full" />
      <div className="absolute w-[300px] h-[300px] bg-blue-500/30 blur-[140px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-white"
      >
        <motion.img
          src={logo}
          alt="RIJI EV"
          className="h-36 w-36 object-contain mb-6"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
          }}
        />

        <h1 className="text-4xl font-extrabold tracking-wide">RIJI EV</h1>
        <p className="mt-2 text-sm tracking-widest text-cyan-300 uppercase">
          Driven by Green Energy
        </p>
      </motion.div>
    </div>
  );
};


export default SplashScreen;
