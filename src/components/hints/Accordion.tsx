"use client";

import { useState, ReactNode } from "react";

interface AccordionItem {
  id: number | string; // Unique ID
  title: string;
  icon?: string;
  content: ReactNode;
  beginnings: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion relative" id="gameAccordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const collapseId = `collapse-${index}`;

        return (
          <div
            className="accordion-item relative border border-gray-300 rounded mb-3 overflow-hidden"
            key={item.id}
          >
            <h2
              className="accordion-header relative z-10"
              id={`heading-${index}`}
            >
              {item.icon && (
                <div className="absolute inset-0">
                  <img
                    src={item.icon}
                    alt="icon background"
                    className="w-full h-full object-cover opacity-20"
                  />
                </div>
              )}
              <button
                className={`accordion-button flex justify-between items-center gap-3 font-semibold text-left text-lg w-full px-4 py-3 transition ${
                  !isOpen ? "collapsed" : ""
                }`}
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen === true}
                aria-controls={collapseId}
              >
                <span className="bg-black/60 text-white px-3 py-1 rounded">
                  {item.title}
                </span>
              </button>
            </h2>
            <div
              id={collapseId}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-screen" : "max-h-0"
              } relative z-10`}
            >
              <div className="accordion-body bg-white/80 backdrop-blur-sm text-gray-900 px-4 py-3 rounded-b max-h-[80vh] overflow-y-auto">
                <h1>Описание</h1>
                {item.content}
                <h1>Начало</h1>
                {item.beginnings}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
