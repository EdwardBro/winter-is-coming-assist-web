"use client";

import React from "react";
import type { HouseData } from "@/data/houses";
import { X } from 'lucide-react';

interface HouseModalProps {
  house: HouseData;
  onClose: () => void;
}

const HouseModal: React.FC<HouseModalProps> = ({ house, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300 animate-fadeIn"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl max-w-lg w-full p-6 text-gray-800 border border-slate-200 animate-scaleIn max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия-иконка */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-200/70 hover:bg-slate-300 transition shadow-md"
          onClick={onClose}
          aria-label="Закрыть"
        >
          <X className="w-6 h-6 text-slate-600" />
        </button>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold mb-2 text-slate-800 drop-shadow">{house.name}</h2>
          {house.shieldImage && (
            <img
              src={house.shieldImage}
              alt={house.name}
              className="w-32 h-32 object-contain rounded-xl shadow mb-2 border border-slate-300 bg-white/60"
            />
          )}
          <div className="w-full text-left space-y-1 mt-2">
            <p><span className="font-semibold text-slate-700">Родовой замок:</span> {house.seat}</p>
            <p><span className="font-semibold text-slate-700">Глава дома:</span> {house.leader}</p>
            <p><span className="font-semibold text-slate-700">Девиз:</span> {house.motto}</p>
          </div>
          {house.cards.length > 0 && (
            <div className="w-full mt-4">
              <h3 className="text-lg font-bold mb-1 text-slate-700">Карты дома:</h3>
              <ul className="grid grid-cols-1 gap-1 list-disc list-inside pl-4">
                {house.cards.map((card) => (
                  <li key={card.id} className="text-slate-700/90">
                    {card.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="mt-4 text-slate-700/90 text-base"><span className="font-semibold">Описание:</span> {house.description}</p>
        </div>
        {/* Кнопка 'Закрыть' для мобильных */}
{/*        <button
          className="mt-6 w-full px-4 py-2 bg-slate-700 text-white rounded-full hover:bg-slate-800 transition md:hidden"
          onClick={onClose}
        >
          Закрыть
        </button>*/}
      </div>
    </div>
  );
};

export default HouseModal;
