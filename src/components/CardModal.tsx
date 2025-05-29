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
        className="overflow-hidden relative w-[90vw] max-w-3xl max-h-[90vh] bg-blue-200 rounded-2xl shadow-lg transform transition-all duration-300 scale-100"
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
          <div className="w-full relative flex justify-center items-center aspect-[3/4]">
            <Image
              src={card.image}
              alt={card.title}
              width={260}
              height={360}
              className="object-cover rounded-lg shadow max-w-[300px] md:max-w-[260px] max-h-[400px] mx-auto"
              /*            onClick={(e) => e.stopPropagation()}*/
              loading="lazy"
            />
          </div>

          <div className="p-4 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">{card.title}</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {card.description}
            </p>

            {hasGif && (
              <Image
                src={`/assets/gifs/${card.id}.gif`}
                alt={`Анимация для ${card.title}`}
                width={420}
                height={420}
                className="object-contain rounded-xl max-w-[320px] md:max-w-[320px] max-h-[320px] w-full h-auto mx-auto"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
