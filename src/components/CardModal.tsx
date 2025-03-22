"use client";

import { SimpleCard } from "@/types";

interface CardModalProps {
  card: SimpleCard;
  onClose: () => void;
}

// Modal component for displaying a selected card.
const CardModal: React.FC<CardModalProps> = ({ card, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white rounded-lg overflow-hidden max-w-md w-full transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-auto object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2 text-gray-700">
            {card.title}
          </h2>
          <p className="text-gray-700">{card.description}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            onClick={onClose}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
