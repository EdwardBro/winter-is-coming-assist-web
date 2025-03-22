"use client";

import { useState } from "react";
import { houses } from "@/data/houses"; // Example data with house name, seat, leader, shield image
import HouseModal from "@/components/extra/HouseModal"; // A modal that shows seat & leader info
import HouseMapOverlay from "@/components/extra/HouseMapOverlay";

export default function HousesPage() {
  const [selectedHouse, setSelectedHouse] = useState<(typeof houses)[0] | null>(
    null
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="custom-header text-3xl my-4 font-bold text-center">
        Выбор Дома
      </h1>
      <p className="text-lg mb-6 text-center">
        Нажмите на герб дома, чтобы узнать подробности о доме и его картах.
      </p>
      <div className="flex justify-center">
        <HouseMapOverlay />
      </div>

      {selectedHouse && (
        <HouseModal
          house={selectedHouse}
          onClose={() => setSelectedHouse(null)}
        />
      )}
    </div>
  );
}
