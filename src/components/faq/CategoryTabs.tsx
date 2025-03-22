"use client";

import React, { FC } from "react";
import { useSwipeable } from "react-swipeable";

interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

const CategoryTabs: FC<CategoryTabsProps> = ({
  categories,
  selectedCategory,
  onSelect,
}) => {
  const selectedIndex = categories.findIndex((cat) => cat === selectedCategory);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (selectedIndex < categories.length - 1) {
        onSelect(categories[selectedIndex + 1]);
      }
    },
    onSwipedRight: () => {
      if (selectedIndex > 0) {
        onSelect(categories[selectedIndex - 1]);
      }
    },
    trackMouse: true, // позволяет тестировать свайп с мыши на ПК
  });

  return (
    <div
      {...handlers}
      className="flex gap-3 mb-8 justify-center flex-wrap border-b border-gray-300"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 focus:outline-none
            ${
              selectedCategory === cat
                ? "border-blue-500 text-white"
                : "border-transparent text-gray-400 hover:text-blue-100 hover:semi-bold semi-bold"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
