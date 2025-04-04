"use client";

import { SimpleCard } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";

interface CardModalProps {
  card: SimpleCard;
  onClose: () => void;
}

// Modal component for displaying a selected card.
const CardModal: React.FC<CardModalProps> = ({ card, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute top-3 right-3 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
        <Image
          src={card.image}
          alt={card.title}
          className="w-full max-h-[60vh] object-cover"
          onClick={(e) => e.stopPropagation()}
          loading="lazy"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2 text-gray-700">
            {card.title}
          </h2>
          <p className="text-gray-700">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
