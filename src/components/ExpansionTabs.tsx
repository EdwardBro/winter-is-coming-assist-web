"use client";

import React from "react";

interface ExpansionTabsProps {
  selected: string;
  onSelect: (expansion: string) => void;
}

const ExpansionTabs: React.FC<ExpansionTabsProps> = ({
  selected,
  onSelect,
}) => {
  const expansionNames = [
    "BASE",
    "MAMKA OF DRAGONS",
    "McFIST FOR CROWS",
    "A DANCE WITH DRAGONS",
  ];

  return (
    <div className="flex gap-3 mb-8 justify-center flex-wrap">
      {expansionNames.map((name) => (
        <button
          key={name}
          onClick={() => onSelect(name)}
          className={`px-2 py-1 text-sm border rounded transition hover:bg-gray-200 hover:text-gray-600 ${
            selected === name
              ? "bg-blue-500 text-white"
              : "bg-gray-900 text-gray-300"
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default ExpansionTabs;
