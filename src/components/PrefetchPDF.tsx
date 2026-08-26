import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getShortLang } from "@/utils/language";

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
  const lang = getShortLang(i18n.language);

  useEffect(() => {
    pdfFiles[lang].forEach((url) => {
      fetch(url, { method: "GET", cache: 'force-cache' });
    });
  }, [lang]);

  return null;
} 