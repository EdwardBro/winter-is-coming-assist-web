"use client";

import React from "react";

interface ExpansionTabsProps {
  selected: string;
  onSelect: (expansion: string) => void;
  labels: { [key: string]: string };
}

const ExpansionTabs: React.FC<ExpansionTabsProps> = ({
  selected,
  onSelect,
  labels,
}) => {
  return (
    <div className="flex gap-3 mb-8 justify-center flex-wrap">
      {Object.keys(labels).map((key) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className={`px-2 py-1 text-sm border rounded transition hover:bg-gray-200 hover:text-gray-600 ${
            selected === key
              ? "bg-gray-500 text-white"
              : "bg-gray-900 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {labels[key]}
        </button>
      ))}
    </div>
  );
};

export default ExpansionTabs;
