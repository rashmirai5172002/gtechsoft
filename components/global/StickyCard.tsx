"use client";

import { useState } from "react";
import { ArrowUpRight, X, Phone } from "lucide-react";

export default function StickyCard() {
  const [showCard, setShowCard] = useState(true);

  return (
    <div className="fixed right-8 bottom-6 z-50">

      {/* WHEN CARD IS HIDDEN → SHOW CALL BUTTON */}
      {!showCard && (
        <button
          onClick={() => setShowCard(true)}
          className="bg-[#F79A01] h-11 w-11 rounded-full flex items-center justify-center shadow-lg"
        >
          <Phone size={20} className="text-black" />
        </button>
      )}

      {/* CARD */}
      {showCard && (
        <div className="relative w-[290px] h-[115px] bg-white rounded-2xl shadow-xl flex p-[1px]">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setShowCard(false)}
            className="absolute top-2 right-2 bg-gray-200 rounded-full p-1"
          >
            <X size={14} />
          </button>

          {/* LEFT IMAGE */}
          <div className="w-[80px] h-full bg-white rounded-2xl p-[2px] pr-0 flex items-start">
            <img
              src="/img-stk.svg"
              alt="Clarissa"
              className="w-full object-contain rounded-xl"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-between flex-1">

            {/* TEXT */}
            <div className="py-2 pl-2">
              <p className="text-sm font-semibold leading-tight">
                Talk with Clarissa
              </p>
              <p className="text-[11px] text-gray-500 tracking-wide">
                SALES EXPERT
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center gap-0 py-3 px-2">
              <button className="flex-1 bg-[#2b2b2b] text-white text-[13px] py-3 rounded-full">
                Book 15 min Call
              </button>

              <button className="bg-[#F79A01] h-11 w-11 rounded-full flex items-center justify-center">
                <ArrowUpRight size={16} className="text-black" />
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}