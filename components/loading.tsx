"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-950 transition-colors">
      <div className="loader">
        <div className="dark:!bg-white"></div>
        <div className="dark:!bg-white"></div>
        <div className="dark:!bg-white"></div>
        <div className="dark:!bg-white"></div>
      </div>
      <style jsx>{`
        .loader {
          display: flex;
          gap: 5px;
        }
        .loader div {
          width: 10px;
          height: 10px;
          background-color: black;
          border-radius: 50%;
          animation: loader-animation 1.2s infinite ease-in-out;
        }
        .loader div:nth-child(1) {
          animation-delay: -0.4s;
        }
        .loader div:nth-child(2) {
          animation-delay: -0.2s;
        }
        .loader div:nth-child(3) {
          animation-delay: 0s;
        }
        .loader div:nth-child(4) {
          animation-delay: 0.2s;
        }
        @keyframes loader-animation {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
