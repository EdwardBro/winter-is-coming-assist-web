import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-4 mt-0">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4">
        <p>{t("footer.rights", { year: currentYear })}</p>
      </div>
    </footer>
  );
};

export default Footer;
