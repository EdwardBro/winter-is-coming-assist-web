import { SimpleCard } from "@/types";

const cardData: SimpleCard[] = [
  {
    id: "cersei",
    title: "Серсея Ланнистер",
    image: "/cards/cersei_card_ru.jpg", // This image exists in public/cards/
    description: "Карта Серсеи Ланнистер при управлении домом Ланнистеров.",
    faction: "lannister",
  },
  {
    id: "catelyn",
    title: "Кейтилин Старк",
    image: "/cards/catelyn_card_ru.jpg",
    description: "Карта Кейтилин Старк в поддержке Дома Старков.",
    faction: "stark",
  },
  {
    id: "olenna",
    title: "Королева шипов",
    image: "/cards/queen_of_thorns_card_ru.jpg",
    description: "Карта Королевы шипов в поддержке Дома Тирелл.",
    faction: "tyrell",
  },
  // Add more cards as needed.
];

export default cardData;
