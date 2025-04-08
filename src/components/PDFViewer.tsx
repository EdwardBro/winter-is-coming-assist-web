"use client";

import { FC, useRef } from "react";
import {
  Viewer,
  Worker,
  SpecialZoomLevel,
  ViewMode,
  ScrollMode,
} from "@react-pdf-viewer/core";
import {
  pageNavigationPlugin,
  RenderGoToPageProps,
} from "@react-pdf-viewer/page-navigation";
import type { PageChangeEvent } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import { t } from "i18next";

interface PDFViewerProps {
  fileUrl: string;
  initialPage?: number;
}

const PDFViewer: FC<PDFViewerProps> = ({ fileUrl, initialPage }) => {
  const initialPageRef = useRef(initialPage);
  const pageNavigationPluginInstance = pageNavigationPlugin();

  const { GoToPreviousPage, GoToNextPage, CurrentPageLabel, NumberOfPages } =
    pageNavigationPluginInstance;

  const handlePageChange = (e: PageChangeEvent) => {
    localStorage.setItem("rulesPageNumber", e.currentPage.toString());
  };

  return (
    <div className="flex flex-col w-screen h-[calc(100vh-280px)] overflow-hidden">
      <div className="flex overflow-hidden">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={fileUrl}
            plugins={[pageNavigationPluginInstance]}
            defaultScale={SpecialZoomLevel.PageWidth}
            initialPage={initialPageRef.current}
            viewMode={ViewMode.SinglePage}
            onPageChange={handlePageChange}
            scrollMode={ScrollMode.Page}
            renderLoader={() => (
              <div className="text-center py-10 text-gray-500 animate-pulse">
                {t("rules.loading")}
              </div>
            )}
            renderError={() => (
              <div className="text-center text-gray-500">
                {t("rules.error")}
              </div>
            )}
          />
        </Worker>
      </div>

      <div className="flex items-center justify-center gap-6 my-4 p-4 text-sm text-gray-300 overflow-hidden">
        <GoToPreviousPage>
          {({ isDisabled, onClick }: RenderGoToPageProps) => (
            <button
              onClick={onClick}
              disabled={isDisabled}
              className="px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50"
            >
              ← Назад
            </button>
          )}
        </GoToPreviousPage>

        <div className="flex items-center gap-1 text-gray-700">
          <CurrentPageLabel /> / <NumberOfPages />
        </div>

        <GoToNextPage>
          {({ isDisabled, onClick }: RenderGoToPageProps) => (
            <button
              onClick={onClick}
              disabled={isDisabled}
              className="px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50"
            >
              Вперёд →
            </button>
          )}
        </GoToNextPage>
      </div>
    </div>
  );
};

export default PDFViewer;
