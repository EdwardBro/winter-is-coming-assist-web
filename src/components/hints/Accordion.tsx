"use client";

import { useState, ReactNode, useEffect, useRef } from "react";

//TODO: Remove lucide-react library

interface AccordionItem {
  id: number | string;
  title: string;
  icon?: string;
  content: ReactNode;
  beginnings?: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null && refs.current[openIndex]) {
      refs.current[openIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [openIndex]);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.id}
            className="relative border border-gray-300 rounded shadow-md overflow-hidden max-w-2xl mx-auto"
            ref={(el) => {
              refs.current[index] = el;
            }}
          >
            {item.icon && (
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${item.icon})`,
                }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </div>
            )}
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-body-${index}`}
              className="relative w-full text-left px-4 py-4 font-semibold text-white text-lg transition flex justify-center items-center"
            >
              <span className="bg-black/70 px-2 py-1 rounded">
                {item.title}
              </span>
            </button>
            <div
              id={`accordion-body-${index}`}
              className={`transition-all duration-300 overflow-hidden bg-white/80 backdrop-blur-sm px-4 ${
                isOpen ? "max-h-[50vh] py-4" : "max-h-0"
              }`}
            >
              <div className="text-gray-900 space-y-4 overflow-y-auto max-h-[40vh] pr-2">
                {item.content && (
                  <div>
                    <h3 className="text-lg font-bold mb-1">Краткий обзор</h3>
                    <div>{item.content}</div>
                  </div>
                )}
                {item.beginnings && (
                  <div>
                    <h3 className="text-lg font-bold mt-4 mb-1">
                      Советы по началу игры
                    </h3>
                    <div>{item.beginnings}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
