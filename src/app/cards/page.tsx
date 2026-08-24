"use client";

import CardModal from "@/components/CardModal";
import { Expansion, SimpleCard } from "@/types";
import { useState, useEffect } from "react";
import { generateHouseCards } from "@/utils/generateHouseCards";
import Image from "next/image";
import { useTranslation } from "react-i18next";

// Expansions are rendered as gallery sections in this order; an expansion
// with no cards yet is simply skipped.
const EXPANSION_ORDER: Expansion[] = [
  "BASE",
  "A FEAST FOR CROWS",
  "MOTHER OF DRAGONS",
  "A DANCE WITH DRAGONS",
];

interface CardSectionProps {
  title: string;
  cards: SimpleCard[];
  onSelect: (card: SimpleCard) => void;
}

const CardSection: React.FC<CardSectionProps> = ({ title, cards, onSelect }) => (
  <div>
    <h2 className="text-2xl font-bold mb-6 text-center text-white">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="cursor-pointer"
          onClick={() => onSelect(card)}
        >
          <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
            <Image
              src={card.image}
              alt={card.title}
              title={card.title}
              loading="lazy"
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 200px"
              fill
            />
          </div>
          <div className="p-2 bg-gray-900 rounded-b-lg">
            <h2 className="text-lg font-bold text-white text-center">
              {card.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CardsPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<SimpleCard | null>(null);
  const [cards, setCards] = useState<SimpleCard[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const loadCards = async () => {
      const generated = await generateHouseCards();
      setCards(generated);
    };

    loadCards();
  }, []);

  const sections = EXPANSION_ORDER.map((expansion) => ({
    expansion,
    cards: cards.filter((card) => card.expansion === expansion),
  })).filter((section) => section.cards.length > 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="custom-header text-3xl font-bold my-4 text-center">
        {t("cards.title")}
      </h1>
      <p className="text-lg mb-6 text-center">{t("cards.description")}</p>

      <div className="space-y-12">
        {sections.map(({ expansion, cards }) => (
          <CardSection
            key={expansion}
            title={t(`rules.expansions.${expansion}`)}
            cards={cards}
            onSelect={setSelectedCard}
          />
        ))}
      </div>

      {selectedCard && (
        <CardModal
          card={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </div>
  );
};

export default CardsPage;
