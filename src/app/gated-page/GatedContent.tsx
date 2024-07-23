"use client";
import { useState } from "react";
import { LoginButton } from "../consts/LoginButton"; // Ruta ajustada

export const GatedContent = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("0xCA1C4A9B05D9214830e8C4392Fc3b60560fBCd48");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const address = "0xCA1C4A9B05D9214830e8C4392Fc3b60560fBCd48";
  const shortAddress = `${address.substring(0, 5)}...${address.substring(address.length - 3)}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-800 to-black text-white p-4">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-green-500 mb-4">Bienvenido</h2>
        <p className="text-gray-400 mb-6">
          Sólo unos pocos pueden estar aquí. <br /><span className="text-white font-bold">¡Eres miembro VIP!</span>
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md text-center mt-4">
        <p className="text-gray-400 mb-4">Copia la siguiente dirección y luego transfiere USDT o USDC.</p>
        <div className="flex items-center justify-center mt-4 flex-wrap">
          <span className="bg-gray-800 p-2 rounded-md">{shortAddress}</span>
          <button
            onClick={copyToClipboard}
            className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
          >
            {copied ? "¡Copiado!" : "Copiar"}
          </button>
        </div>
        <div className="mt-4">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};
