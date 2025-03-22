"use client";

import React, { useState } from "react";
import { houses, HouseData } from "@/data/houses";
import HouseModal from "./HouseModal";

export default function HouseGridOverlay() {
  const [selectedHouse, setSelectedHouse] = useState<HouseData | null>(null);

  const baseHouseOrder = [
    "lannister",
    "stark",
    "greyjoy",
    "martell",
    "tyrell",
    "baratheon",
  ];

  // Filter out houses not on the common map (Arryns and Targaryens are excluded)
  const baseHouses = houses.filter((house) =>
    baseHouseOrder.includes(house.id)
  );

  const sortedHouses = baseHouseOrder
    .map((id) => baseHouses.find((house) => house.id === id))
    .filter((house): house is HouseData => Boolean(house));

  return (
    <div className="relative w-full">
      {/* The main map image */}
      <div className="relative w-full">
        <img
          src="/assets/houses_menu.png"
          alt="Heraldry Map"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-3">
        {sortedHouses.map((house, index) => (
          <div
            key={index}
            className="flex items-center justify-center cursor-pointer hover:bg-blue-100 hover:opacity-20"
            onClick={() => house && setSelectedHouse(house)}
          ></div>
        ))}
      </div>
      {/* Modal */}
      {selectedHouse && (
        <HouseModal
          house={selectedHouse}
          onClose={() => setSelectedHouse(null)}
        />
      )}
    </div>
  );
}
