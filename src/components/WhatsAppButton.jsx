"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WhatsAppButton() {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Pulse animation
    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.8,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <a
      ref={buttonRef}
      href="https://wa.me/919136199725?text=Hii.."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full shadow-lg p-3 hover:bg-green-600 transition-colors"
      style={{ width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <img 
        src="/images/assets/whatsappBlack-removebg-preview.png" 
        alt="WhatsApp Chat" 
        className="w-8 h-8 invert brightness-0" 
      />
    </a>
  );
}
