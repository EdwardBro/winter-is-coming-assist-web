"use client";

import CardModal from "@/components/CardModal";
import { SimpleCard } from "@/types";
import { useState, useEffect } from "react";
import { generateHouseCards } from "@/utils/generateHouseCards";
import Image from "next/image";
import houseCards from "@/data/houseCards";
import { useTranslation } from "react-i18next";

const CardsPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<SimpleCard | null>(null);
  const [cards, setCards] = useState<SimpleCard[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const loadCards = async () => {
      const generated = await generateHouseCards(houseCards);
      setCards(generated);
    };

    loadCards();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="custom-header text-4xl font-bold my-4 text-center">
        {t("cards.title")}
      </h1>
      <p className="text-lg mb-6 text-center">{t("cards.description")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-9">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedCard(card)}
          >
            <Image
              src={card.image}
              alt={card.title}
              title={card.title}
              loading="lazy"
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 300px"
              fill
            />
            <div className="p-4 bg-gray-900">
              <h2 className="text-xl font-bold text-white">{card.title}</h2>
            </div>
          </div>
        ))}

        {selectedCard && (
          <CardModal
            card={selectedCard}
            onClose={() => setSelectedCard(null)}
          />
        )}
      </div>
    </div>
  );
};

export default CardsPage;
