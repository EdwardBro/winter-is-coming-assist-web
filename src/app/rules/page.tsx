"use client";

import ExpansionTabs from "@/components/ExpansionTabs";
/*import PdfNavButtons from "@/components/PdfNavButtons";*/
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { expansionMapping } from "@/data/expansionMap";
import { getShortLang } from "@/utils/language";

const PDFViewer = dynamic(() => import("@/components/PDFViewer"), {
  ssr: false,
  loading: () => (
    <div className="text-center py-16 animate-pulse">
      <p className="text-lg text-gray-400">Loading</p>
    </div>
  ),
});

export default function RulesPage() {
  const { i18n, t } = useTranslation();
  const [initialPage, setInitialPage] = useState(0);
  const [selectedExpansion, setSelectedExpansion] = useState("BASE");

  const filePrefix = expansionMapping[selectedExpansion] || "rules";
  const pdfFilePath = `/pdf/${filePrefix}_${getShortLang(i18n.language).toUpperCase()}.pdf`;

  useEffect(() => {
    const savedPage = localStorage.getItem("rulesPageNumber");
    if (savedPage) {
      const page = parseInt(savedPage, 10);
      if (!isNaN(page)) setInitialPage(page);
    } else {
      setInitialPage(0);
    }
  }, [pdfFilePath]);

  useEffect(() => {
    // очищаем localStorage если язык или дополнение меняется
    localStorage.removeItem("rulesPageNumber");
  }, [i18n.language, selectedExpansion]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="custom-header text-4xl font-bold mb-8 text-center">
        {t("rules.title")}
      </h1>

      <ExpansionTabs
        selected={selectedExpansion}
        onSelect={setSelectedExpansion}
        labels={
          t("rules.expansions", { returnObjects: true }) as {
            [key: string]: string;
          }
        }
      />
      <div className="w-full overflow-hidden">
        <PDFViewer
          key={pdfFilePath}
          fileUrl={pdfFilePath}
          initialPage={initialPage}
        />
      </div>
    </div>
  );
}
