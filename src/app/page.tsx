"use client";

import { useActiveAccount } from "thirdweb/react";
import { LoginButton } from "./consts/LoginButton";

export default function Home() {
  const account = useActiveAccount();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-black via-gray-900 to-black text-white p-4">
      <h1 className="text-4xl mb-12 text-center">
        Acceso exclusivo <br /> miembros <span className="text-white font-bold">VIP</span>
      </h1>
      <div className="mx-auto">
        <LoginButton />
      </div>

      {account && (
        <div className="mt-12 text-center relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-10 h-10 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <a
            href="/gated-page"
            className="underline text-green-300 px-4 py-2 mt-4 bg-gray-800 rounded-md hover:bg-gray-700 transition-all duration-300"
          >
            Ir a la página de miembro
          </a>
          <p className="mt-4">Has iniciado sesión.</p>
        </div>
      )}
    </div>
  );
}
