"use client";

import CategoryTabs from "@/components/faq/CategoryTabs";
import FAQItemComponent from "@/components/faq/FAQItem";
import SearchBar from "@/components/faq/SearchBar";
import { useTranslation } from "react-i18next";
import { faqData } from "@/data/faq";
import { useState } from "react";
/*import { useSwipeable } from "react-swipeable";*/

export default function FAQPage() {
  const { i18n, t } = useTranslation();
  const language = i18n.language as "en" | "ru";

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const localizedData = faqData[language];
  const { items, categories } = localizedData;

  // Filter FAQ items by search query and selected category.
  const filteredFaq = items.filter((item) => {
    const matchesQuery =
      item.question.toLowerCase().includes(query.toLowerCase()) ||
      item.answer.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  // Set up swipe handlers on the FAQ list container.
  /*  const selectedIndex = categories.indexOf(selectedCategory);*/
  /*  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (selectedIndex < categories.length - 1) {
        setSelectedCategory(categories[selectedIndex + 1]);
      }
    },
    onSwipedRight: () => {
      if (selectedIndex > 0) {
        setSelectedCategory(categories[selectedIndex - 1]);
      }
    },
    trackMouse: true, // for testing with mouse
  });*/

  return (
    <div /*{...swipeHandlers}*/ className="container mx-auto p-4">
      <h1 className="custom-header text-4xl font-bold mb-8 text-center">
        {t("faq.title", "FAQ")}
      </h1>

      <div className="max-w-xl mx-auto mb-6">
        <SearchBar
          query={query}
          onChange={setQuery}
          placeholder={t("faq.search", "Search FAQs...")}
        />
      </div>

      <div className="max-w-xl mx-auto mb-6">
        <CategoryTabs
          categories={Object.values(categories)}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {filteredFaq.length > 0 ? (
          filteredFaq.map((item, index) => (
            <FAQItemComponent key={index} item={item} />
          ))
        ) : (
          <p className="text-center text-gray-500">
            {t("faq.noResults", "No results found.")}
          </p>
        )}
      </div>
    </div>
  );
}
