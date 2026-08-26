"use client";

import { SimpleCard } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CardModalProps {
  card: SimpleCard;
  onClose: () => void;
}

// Modal component for displaying a selected card.
const CardModal: React.FC<CardModalProps> = ({ card, onClose }) => {
  const [hasGif, setHasGif] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    // Проверяем наличие gif
    const gifUrl = `/assets/gifs/${card.id}.gif`;
    fetch(gifUrl, { method: 'HEAD' })
      .then(res => setHasGif(res.ok))
      .catch(() => setHasGif(false));
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [card.id]);

  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="overflow-hidden relative w-[90vw] max-w-4xl max-h-[90vh] bg-blue-200 rounded-2xl shadow-lg transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="fixed md:absolute top-4 right-4 z-50 p-2 bg-gray-200 rounded-full hover:bg-gray-400 transition opacity-90"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="overflow-y-auto max-h-[90vh] pt-2 bg-gray-100">
          <div className="w-full relative flex justify-center items-center">
            <Image
              src={card.image}
              alt={card.title}
              width={500}
              height={700}
              className="object-contain rounded-lg shadow w-auto h-auto max-w-[500px] max-h-[700px] mx-auto"
              loading="lazy"
            />
          </div>

          <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">{card.title}</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {card.description}
            </p>

            {hasGif && (
              <div className="w-full flex justify-center">
                <Image
                  src={`/assets/gifs/${card.id}.gif`}
                  alt={`Анимация для ${card.title}`}
                  width={600}
                  height={600}
                  className="object-contain rounded-xl w-auto h-auto max-w-[90%] max-h-[600px] mx-auto"
                  loading="lazy"
                  unoptimized
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
