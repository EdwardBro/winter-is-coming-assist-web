"use client";

import { useState } from "react";
import { houses } from "@/data/houses";
import HouseMapOverlay from "@/components/extra/HouseMapOverlay";
import HouseModal from "@/components/extra/HouseModal";

const ExtraPage: React.FC = () => {
  const [selectedHouse, setSelectedHouse] = useState<(typeof houses)[0] | null>(
    null
  );

  return (
    <div className="container mx-auto py-4">
      <h1 className="custom-header text-4xl font-bold my-4 text-center">
        Extra
      </h1>
      <p className="text-lg mb-6 text-center">
        Here you will find character biographies and interesting lore facts
        without the heaviness.
      </p>
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
};

export default ExtraPage;
