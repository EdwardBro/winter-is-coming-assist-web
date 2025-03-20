"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Set up PDF.js worker from a CDN.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const ExpansionTabs = () => {
  const expansionNames = [
    "BASE",
    "MAMKA OF DRAGONS",
    "McFIST FOR CROWS",
    "A DANCE WITH DRAGONS",
  ];

  return (
    <div className="flex gap-2 mb-8 justify-center flex-wrap">
      {expansionNames.map((name, index) => (
        <button
          key={index}
          className="px-2 py-1 border rounded hover:bg-gray-200 hover:text-gray-600 transition"
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default function RulesPage() {
  const { language } = useLanguage();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const pdfFilePath =
    language === "ru" ? "/pdf/rules_RU.pdf" : "/pdf/rules_EN.pdf";

  return (
    <div className="container mx-auto p-4" ref={containerRef}>
      <h1 className="custom-header text-4xl font-bold mb-8 text-center">
        Game Rules
      </h1>

      {/*      <div className="flex justify-center items-center gap-4 mb-4">
      </div>*/}

      <ExpansionTabs />
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

      <div className="mt-6 text-center">
        <p className="mb-4">
          Page {pageNumber} {numPages ? `of ${numPages}` : ""}
        </p>
        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-gray-600 rounded disabled:opacity-50"
            onClick={() => setPageNumber((prev) => prev - 1)}
            disabled={pageNumber <= 1}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-gray-600 rounded disabled:opacity-50"
            onClick={() => setPageNumber((prev) => prev + 1)}
            disabled={numPages !== null ? pageNumber >= numPages : true}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
