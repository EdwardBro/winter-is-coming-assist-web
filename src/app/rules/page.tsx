"use client";
import ExpansionTabs from "@/components/ExpansionTabs";
import PdfNavButtons from "@/components/PdfNavButtons";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Set up PDF.js worker from a CDN.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const expansionMapping: { [key: string]: string } = {
  BASE: "rules",
  "MAMKA OF DRAGONS": "Mother",
  "McFIST FOR CROWS": "Crows",
  "A DANCE WITH DRAGONS": "Dance",
};

export default function RulesPage() {
  const { language } = useLanguage();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedExpansion, setSelectedExpansion] = useState("BASE");

  // Measure container width for responsive PDF scaling.
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth(); // initial measurement
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Callback when PDF document is successfully loaded.
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber((prevPage) => (prevPage > numPages ? numPages : prevPage));
  };

  const filePrefix = expansionMapping[selectedExpansion] || "rules";
  const pdfFilePath = `/pdf/${filePrefix}_${language.toUpperCase()}.pdf`;

  return (
    <div className="container mx-auto p-4" ref={containerRef}>
      <h1 className="custom-header text-4xl font-bold mb-8 text-center">
        Game Rules
      </h1>

      {/*      <div className="flex justify-center items-center gap-4 mb-4">
      </div>*/}

      <ExpansionTabs
        selected={selectedExpansion}
        onSelect={setSelectedExpansion}
      />
      <div className="flex gap-3 mb-8 justify-center flex-wrap">
        <Document
          file={pdfFilePath}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div>Loading PDF...</div>}
          error={<div>Failed to load PDF.</div>}
        >
          <Page
            pageNumber={pageNumber}
            width={width}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </div>

      <div className="text-center">
        <p className="mb-4">
          Page {pageNumber} {numPages ? `of ${numPages}` : ""}
        </p>

        <PdfNavButtons
          pageNumber={pageNumber}
          numPages={numPages}
          onPrev={() => setPageNumber((prev) => prev - 1)}
          onNext={() => setPageNumber((prev) => prev + 1)}
        />
      </div>
    </div>
  );
}
