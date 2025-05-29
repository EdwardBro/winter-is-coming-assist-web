import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const pdfFiles = {
  ru: [
    "/pdf/rules_RU.pdf",
    "/pdf/Mother_RU.pdf",
    "/pdf/Dance_RU.pdf",
    "/pdf/Crows_RU.pdf",
  ],
  en: [
    "/pdf/rules_EN.pdf",
    "/pdf/Mother_EN.pdf",
    "/pdf/Crows_EN.pdf",
  ],
};

export default function PrefetchPDF() {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith("ru") ? "ru" : "en";

  useEffect(() => {
    pdfFiles[lang].forEach((url) => {
      fetch(url, { method: "GET", cache: 'force-cache' });
    });
  }, [lang]);

  return null;
} 