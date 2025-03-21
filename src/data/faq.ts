export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

// FAQ data grouped by language
export const faqData: { [lang: string]: FAQItem[] } = {
  en: [
    {
      question: "How do I use this app?",
      answer:
        "This app helps you master the complex rules of the board game. Navigate to the Rules page for detailed instructions.",
      category: "General",
    },
    {
      question: "What is the optimal strategy?",
      answer:
        "The optimal strategy depends on your playstyle and the current game state.",
      category: "Gameplay",
    },
    {
      question: "How do I switch languages?",
      answer:
        "Use the language switcher in the navbar to toggle between languages.",
      category: "General",
    },
    {
      question: "Can I install this app as a PWA?",
      answer:
        "Yes, this application is a Progressive Web App (PWA) and can be installed on your mobile device directly from the browser.",
      category: "PWA",
    },
    // ... more FAQ items in English
  ],
  ru: [
    {
      question: "Как пользоваться приложением?",
      answer:
        "Это приложение поможет вам освоить сложные правила настольной игры. Перейдите на страницу Правил для подробных инструкций.",
      category: "Общее",
    },
    {
      question: "Какая оптимальная стратегия?",
      answer:
        "Оптимальная стратегия зависит от вашего стиля игры и текущего состояния партии.",
      category: "Игровой процесс",
    },
    {
      question: "Как переключить язык?",
      answer:
        "Используйте переключатель языка в навигационной панели для смены языка.",
      category: "Общее",
    },
    {
      question: "Можно ли установить это приложение как PWA?",
      answer:
        "Да, это приложение является прогрессивным веб-приложением (PWA), и вы можете установить его на мобильное устройство прямо из браузера.",
      category: "PWA",
    },
    // ... more FAQ items in Russian
  ],
};
