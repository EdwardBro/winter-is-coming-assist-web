"use client";

import { useState } from "react";
import { houses } from "@/data/houses";
import HouseMapOverlay from "@/components/extra/HouseMapOverlay";
import HouseModal from "@/components/extra/HouseModal";
import { useTranslation } from "react-i18next";

const ExtraPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedHouse, setSelectedHouse] = useState<(typeof houses)[0] | null>(
    null
  );

  return (
    <div className="container mx-auto py-4">
      <h1 className="custom-header text-4xl font-bold my-4 text-center">
        {t("extra.title")}
      </h1>
      <p className="text-lg mb-6 text-center">{t("extra.description")}</p>
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
