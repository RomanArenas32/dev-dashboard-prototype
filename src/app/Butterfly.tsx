"use client";

import { useEffect, useState } from "react";

export default function Butterfly() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Mariposa 1 */}
      <div className="butterfly butterfly-1" aria-hidden="true">
        <ButterflyIcon color1="#34d399" color2="#6ee7b7" />
      </div>
      {/* Mariposa 2 */}
      <div className="butterfly butterfly-2" aria-hidden="true">
        <ButterflyIcon color1="#60a5fa" color2="#93c5fd" />
      </div>
      {/* Mariposa 3 */}
      <div className="butterfly butterfly-3" aria-hidden="true">
        <ButterflyIcon color1="#a78bfa" color2="#c4b5fd" />
      </div>
    </>
  );
}

function ButterflyIcon({ color1, color2 }: { color1: string; color2: string }) {
  return (
    <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Clip circular para la cara */}
      <defs>
        <clipPath id="face-clip">
          <circle cx="50" cy="45" r="20" />
        </clipPath>
      </defs>

      {/* Ala izquierda superior */}
      <path
        className="wing-left"
        d="M50 50 C25 15, -5 10, 5 45 C8 58, 30 65, 50 50Z"
        fill={color1}
        opacity="0.8"
      />
      {/* Ala izquierda inferior */}
      <path
        className="wing-left"
        d="M50 50 C30 65, 5 80, 15 58 C20 50, 38 52, 50 50Z"
        fill={color2}
        opacity="0.6"
      />
      {/* Ala derecha superior */}
      <path
        className="wing-right"
        d="M50 50 C75 15, 105 10, 95 45 C92 58, 70 65, 50 50Z"
        fill={color1}
        opacity="0.8"
      />
      {/* Ala derecha inferior */}
      <path
        className="wing-right"
        d="M50 50 C70 65, 95 80, 85 58 C80 50, 62 52, 50 50Z"
        fill={color2}
        opacity="0.6"
      />

      {/* Cuerpo */}
      <ellipse cx="50" cy="55" rx="3" ry="14" fill="#e4e4e7" />

      {/* Cara de la persona - imagen circular */}
      <image
        href="/face.png"
        x="30"
        y="25"
        width="40"
        height="40"
        clipPath="url(#face-clip)"
        preserveAspectRatio="xMidYMid slice"
      />
      {/* Borde de la cara */}
      <circle cx="50" cy="45" r="20" stroke={color1} strokeWidth="1.5" fill="none" />

      {/* Antenas */}
      <line x1="48" y1="32" x2="38" y2="18" stroke="#e4e4e7" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="52" y1="32" x2="62" y2="18" stroke="#e4e4e7" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="38" cy="17" r="2" fill={color1} />
      <circle cx="62" cy="17" r="2" fill={color1} />
    </svg>
  );
}
