// src/components/SplashScreen.tsx
import React from "react";
import logo from "@/assets/logo.png"; // adjust the path based on your project

const SplashScreen = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
      <img
        src={logo}
        alt="Company Logo"
        className="h-32 w-32 object-contain mb-4"
      />
      <h1 className="text-3xl font-bold tracking-wide">Welcome to RIJI EV</h1>
      <p className="text-sm mt-2 text-purple-300">Driven by Green Energy</p>
    </div>
  );
};

export default SplashScreen;
