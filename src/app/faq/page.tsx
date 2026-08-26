"use client";

import CategoryTabs from "@/components/faq/CategoryTabs";
import FAQItemComponent from "@/components/faq/FAQItem";
import SearchBar from "@/components/faq/SearchBar";
import { useTranslation } from "react-i18next";
import { useState } from "react";
/*import { useSwipeable } from "react-swipeable";*/

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface FAQData {
  title: string;
  description: string;
  categories: {
    [key: string]: string;
  };
  items: FAQItem[];
}

export default function FAQPage() {
  const { i18n, t } = useTranslation();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("general");

  // Добавим проверку на загрузку переводов
  if (!i18n.isInitialized) {
    return <div>Loading...</div>;
  }

  const faqData = {
    title: t('faq.title', 'FAQ'),
    description: t('faq.description', 'Frequently Asked Questions'),
    categories: {
      general: t('faq.categories.general', 'Общее'),
      gameplay: t('faq.categories.gameplay', 'Геймплей'),
      ports: t('faq.categories.ports', 'Порты'),
      hire: t('faq.categories.hire', 'Призыв'),
      special_tokens: t('faq.categories.special_tokens', 'Специальные жетоны')
    },
    items: Array.isArray(t('faq.items', { returnObjects: true })) 
      ? t('faq.items', { returnObjects: true }) 
      : []
  } as FAQData;

  // Filter FAQ items by search query and selected category.
  const filteredFaq = faqData.items.filter((item: FAQItem) => {
    const matchesQuery =
      item.question.toLowerCase().includes(query.toLowerCase()) ||
      item.answer.toLowerCase().includes(query.toLowerCase());
    
    // Изменяем логику сравнения категорий
    const matchesCategory = selectedCategory === "general" || 
      item.category === faqData.categories[selectedCategory];

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
          categories={faqData.categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {filteredFaq.length > 0 ? (
          filteredFaq.map((item: FAQItem, index: number) => (
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
