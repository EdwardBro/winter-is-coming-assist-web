"use client";

import CardModal from "@/components/CardModal";
import { HouseCard } from "@/types";
import { useState } from "react";
import Link from "next/link";
import houseCards from "@/data/houseCards";

const ExtraPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<HouseCard | null>(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="custom-header text-4xl font-bold my-4 text-center">
        Cards
      </h1>
      <p className="text-lg mb-6 text-center">
        "До меня дошли слухи, что здесь можно найти карты персонажей и
        интересные факты о мире Game of Thrones." - Лорд Варис
      </p>

      <div className="mt-8 text-center">
        <Link
          href="/extra/houses"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Выбрать дом
        </Link>
      </div>

      {/* Single grid to display both static house info and dynamic card items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-9">
        {houseCards.map((card) => (
          <div
            key={card.id}
            className="rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelectedCard(card)}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
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

export default ExtraPage;
