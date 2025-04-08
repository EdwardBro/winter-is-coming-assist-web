"use client";

/*import CategoryTabs from "@/components/faq/CategoryTabs";*/
/*import FAQItemComponent from "@/components/faq/FAQItem";*/
import SearchBar from "@/components/faq/SearchBar";
import { useTranslation } from "react-i18next";
/*import faqData from "@/data/faq.json";*/
import React, { useState } from "react";
/*import { useSwipeable } from "react-swipeable";*/

export default function FAQPage() {
  const { t } = useTranslation();

  const [query, setQuery] = useState("");
  /*  const categories = ["All", "General", "Gameplay", "PWA"];*/
  /*  const [selectedCategory, setSelectedCategory] = useState("All");*/

  /*  const currentFaqData = faqData[language] || [];*/

  // Filter FAQ items by search query and selected category.
  /*  const filteredFaq = currentFaqData.filter((item) => {
    return (
      item.question.toLowerCase().includes(query.toLowerCase()) ||
      item.answer.toLowerCase().includes(query.toLowerCase())
          const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesQuery && matchesCategory;
          return matchesQuery;
    );
  });*/

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

      {/*      <div className="max-w-xl mx-auto mb-6">
        <CategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>*/}

      <div className="max-w-2xl mx-auto space-y-4">
        {/*        {filteredFaq.length > 0 ? (
          filteredFaq.map((item, index) => (
            <FAQItemComponent key={index} item={item} />
          ))
        ) : (
          <p className="text-center text-gray-500">
            {t("faq.noResults", "No results found.")}
          </p>
        )}*/}
        <p className="text-center text-gray-500">
          {t("faq.noResults", "No results found.")}
        </p>
      </div>
    </div>
  );
}
