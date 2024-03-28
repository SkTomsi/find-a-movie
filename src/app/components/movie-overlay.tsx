/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function MovieOverlay() {
  return (
    <div className="relative">
      {/* SVG */}
      <div className="absolute md:scale-[85%] scale-[50%] opacity-40">
        <svg
          width="360"
          height="245"
          viewBox="0 0 360 245"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M360 211L0 245V7.5L360 0.5V211Z" fill="#000" />
        </svg>
      </div>
      <div className="md:scale-[78%] scale-[45%]">
        <svg
          width="360"
          height="245"
          viewBox="0 0 360 245"
          fill=""
          xmlns="http://www.w3.org/2000/svg"
          stroke="#fff"
        >
          <defs>
            <clipPath id="clipPath">
              <path d="M360 211L0 245V7.5L360 0.5V211Z" fill="#D9D9D9" />
            </clipPath>
          </defs>
        </svg>

        {/* Clipped Image */}
        <div className="absolute top-0 left-0 h-full object-contain">
          <img
            src="/godha.jpg" // Replace with your image URL
            alt="Clipped Image"
            className="h-full object-cover"
            style={{ clipPath: "url(#clipPath)" }}
          />
        </div>
      </div>
    </div>
  );
}
