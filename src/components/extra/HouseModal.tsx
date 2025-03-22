"use client";

import React from "react";
import type { HouseData } from "@/data/houses";

interface HouseModalProps {
  house: HouseData;
  onClose: () => void;
}

const HouseModal: React.FC<HouseModalProps> = ({ house, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white rounded-lg overflow-hidden max-w-md w-full p-4 text-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-2">{house.name}</h2>
        <p className="mb-1">
          <span className="font-semibold">Родовой замок:</span> {house.seat}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Глава дома:</span> {house.leader}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Девиз:</span> {house.motto}
        </p>
        {/* Optional: show a shield image or house sigil */}
        {house.image && (
          <img
            src={house.image}
            alt={house.name}
            className="mt-4 w-full h-auto object-cover rounded"
          />
        )}
        {house.cards.length > 0 && (
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">Карты дома:</h3>
            <ul className="list-disc list-inside">
              {house.cards.map((card) => (
                <li key={card.id} className="text-gray-700">
                  {card.title}
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="my-2">
          <span className="font-semibold">Описание:</span> {house.description}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={onClose}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

export default HouseModal;
