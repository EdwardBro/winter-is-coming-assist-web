"use client";

import HouseMapOverlay from "@/components/extra/HouseMapOverlay";
import { useTranslation } from "react-i18next";

const ExtraPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-4">
      <h1 className="custom-header text-3xl font-bold my-4 text-center">
        {t("extra.title")}
      </h1>
      <p className="text-lg mb-6 text-center">{t("extra.description")}</p>
      <div className="flex justify-center">
        <HouseMapOverlay />
      </div>
    </div>
  );
};

export default ExtraPage;
