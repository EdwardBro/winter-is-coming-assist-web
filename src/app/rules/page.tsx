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
  "MOTHER OF DRAGONS": "Mother",
  "A FEAST FOR CROWS": "Crows",
  "A DANCE WITH DRAGONS": "Dance",
};

export default function RulesPage() {
  const { language } = useLanguage();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedExpansion, setSelectedExpansion] = useState("BASE");
  const scrollPosRef = useRef<number>(0);

  // Load the saved page number from localStorage when the component mounts
  useEffect(() => {
    const savedPage = localStorage.getItem("rulesPageNumber");
    if (savedPage) {
      const parsedPage = parseInt(savedPage, 10);
      if (!isNaN(parsedPage)) {
        setPageNumber(parsedPage);
      }
    }
  }, []);

  // Save the current page number to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("rulesPageNumber", pageNumber.toString());
  }, [pageNumber]);

  // Measure container width for responsive PDF scaling
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Callback when PDF document is successfully loaded.
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber((prevPage) => (prevPage > numPages ? numPages : prevPage));
  };

  const handlePrev = () => {
    if (containerRef.current) {
      scrollPosRef.current = containerRef.current.scrollTop;
    }
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      scrollPosRef.current = containerRef.current.scrollTop;
    }
    if (numPages !== null && pageNumber < numPages) {
      setPageNumber((prev) => prev + 1);
    }
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
      <div className="flex mb-8 justify-center flex-wrap overflow-y-auto">
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
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}
