import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-4 mt-0">
      <p>{t("footer.rights", { year: currentYear })}</p>
    </footer>
  );
};

export default Footer;
