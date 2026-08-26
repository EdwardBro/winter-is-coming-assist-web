"use client";

import React, { FC } from "react";

interface PdfNavButtonsProps {
  pageNumber: number;
  numPages: number | null;
  onPrev: () => void;
  onNext: () => void;
}

const PdfNavButtons: FC<PdfNavButtonsProps> = ({
  pageNumber,
  numPages,
  onPrev,
  onNext,
}) => {
  return (
    <div className="flex justify-center gap-4">
      {/* Previous Page Button */}
      <button
        onClick={onPrev}
        disabled={pageNumber <= 1}
        className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center disabled:opacity-50 hover:bg-gray-700 transition"
        aria-label="Previous Page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Page Button */}
      <button
        onClick={onNext}
        disabled={numPages !== null ? pageNumber >= numPages : true}
        className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center disabled:opacity-50 hover:bg-gray-700 transition"
        aria-label="Next Page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default PdfNavButtons;
