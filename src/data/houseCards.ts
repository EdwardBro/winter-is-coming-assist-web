import { HouseCard } from "@/types";
import { generateHouseCards } from "@/utils/generateHouseCards";

const houses = [
  {
    faction: "lannister",
    cards: [
      { id: "cersei", title: "Серсея Ланнистер" },
      { id: "tyrion", title: "Тирион Ланнистер" },
      { id: "jaime", title: "Джейме Ланнистер" },
      { id: "tywin", title: "Тайвин Ланнистер" },
      { id: "hound", title: "Пёс (Сандор Клиган)" },
      { id: "mountain", title: "Гора (Григор Клиган)" },
      { id: "kevan", title: "Киван Ланнистер" },
    ],
  },
  {
    faction: "stark",
    cards: [
      { id: "ned", title: "Эддард Старк" },
      { id: "catelyn", title: "Кейтилин Старк" },
      { id: "robb", title: "Робб Старк" },
      { id: "roose", title: "Рус Болтон" },
      { id: "brynden", title: "Бринден Чёрная Рыба Талли" },
      { id: "rodrik", title: "Сир Родрик Кассель" },
      { id: "umber", title: "Большой Джон Амбер" },
    ],
  },
  {
    faction: "greyjoy",
    cards: [
      { id: "baylon", title: "Бейлон Грейджой" },
      { id: "euron", title: "Эурон Грейджой" },
      { id: "asha", title: "Аша Грейджой" },
      { id: "theon", title: "Теон Грейджой" },
      { id: "victarion", title: "Виктарион Грейджой" },
      { id: "aeron", title: "Эйрон Грейджой" },
      { id: "dagmer", title: "Дагмер Битый Рот" },
    ],
  },
  {
    faction: "martell",
    cards: [
      { id: "doran", title: "Доран Мартелл" },
      { id: "oberyn", title: "Оберин Красная Гадюка Мартелл" },
      { id: "arianne", title: "Арианна Мартелл" },
      { id: "darkstar", title: "Герольд Тёмная Звезда" },
      { id: "areo", title: "Арео Хотах" },
      { id: "nymeria", title: "Нимерия Санд" },
      { id: "obara", title: "Обара Сенд" },
    ],
  },
  {
    faction: "tyrell",
    cards: [
      { id: "mace", title: "Мейс Тирелл" },
      { id: "margaery", title: "Маргери Тирелл" },
      { id: "loras", title: "Лорас Тирелл" },
      { id: "olenna", title: "Оленна Тирелл" },
      { id: "randyll", title: "Рэндилл Тирелл" },
      { id: "garlan", title: "Гарлан Тирелл" },
      { id: "florent", title: "Алестер Флорент" },
    ],
  },
  {
    faction: "baratheon",
    cards: [
      { id: "stannis", title: "Станнис Баратеон" },
      { id: "davos", title: "Давос Сиворт" },
      { id: "melisandre", title: "Мелисандра" },
      { id: "renly", title: "Ренли Баратеон" },
      { id: "brienne", title: "Бриенна Тарт" },
      { id: "salador", title: "Саладор Саан" },
      { id: "patchface", title: "Пестряк" },
    ],
  },
];

const houseCards = generateHouseCards(houses);

export default houseCards;

/*const houseCards: HouseCard[] = [
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
    id: "queen_of_thorns",
    title: "Королева шипов",
    image: "/cards/queen_of_thorns_card_ru.jpg",
    description: "Карта Королевы шипов в поддержке Дома Тирелл.",
    faction: "tyrell",
  },
  {
    id: "tywin",
    title: "Тайвин Ланнистер",
    image: "/cards/tywin_card_ru.jpg",
    description: "Карта Тайвина Ланнистера при управлении домом Ланнистеров.",
    faction: "lannister",
  },
  {
    id: "robb",
    title: "Робб Старк",
    image: "/cards/robb_card_ru.jpg",
    description: "Карта Робба Старка в поддержке Дома Старков.",
    faction: "stark",
  },
  {
    id: "margaery",
    title: "Маргери Тирелл",
    image: "/cards/margaery_card_ru.jpg",
    description: "Карта Маргери Тирелл в поддержке Дома Тирелл.",
    faction: "tyrell",
  },
];*/
