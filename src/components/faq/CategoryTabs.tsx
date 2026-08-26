"use client";

import React, { FC } from "react";
/*import { useSwipeable } from "react-swipeable";*/

interface CategoryTabsProps {
  categories: {
    [key: string]: string;
  };
  selectedCategory: string;
  onSelect: (category: string) => void;
}

const CategoryTabs: FC<CategoryTabsProps> = ({
  categories,
  selectedCategory,
  onSelect,
}) => {

  /*  const handlers = useSwipeable({
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
  });*/

  return (
    <div
      /*{...handlers}*/
      className="flex gap-3 mb-8 justify-center flex-wrap"
    >
      {Object.entries(categories).map(([key, label]) => (
        <button
          key={key}
          onClick={() => onSelect(key)}
          className={`relative px-4 py-2 text-sm font-medium transition-all duration-300
            after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300
            after:w-0 hover:after:w-full
            ${
              selectedCategory === key
                ? "text-blue-400 after:w-full"
                : "text-gray-400 hover:text-blue-400"
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
