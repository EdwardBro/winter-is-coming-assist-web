export interface HouseData {
  id: string;
  name: string;
  seat: string;
  leader: string;
  motto: string;
  shieldX?: number; // X coordinate on the map
  shieldY?: number; // Y coordinate on the map
  shieldImage?: string; // Optional: path to a shield icon or larger image
  image?: string; // Optional: path to a shield icon or larger image
  cards: { id: string; title: string }[]; // Optional: list of cards for this house
  description?: string; // Optional: lore description
}

export const houses: HouseData[] = [
  {
    id: "stark",
    name: "Дом Старк",
    seat: "Винтерфелл",
    leader: "Эддард Старк",
    motto: "Winter is Coming",
    shieldX: 40, // example coordinate
    shieldY: 30, // example coordinate
    image: "/cards/stark.png",
    cards: [
      { id: "ned", title: "Эддард Старк" },
      { id: "catelyn", title: "Кейтилин Старк" },
      { id: "robb", title: "Робб Старк" },
      { id: "roose", title: "Рус Болтон" },
      { id: "brynden", title: "Бринден Чёрная Рыба Талли" },
      { id: "rodrik", title: "Сир Родрик Кассель" },
      { id: "umber", title: "Большой Джон Амбер" },
    ],
    description:
      "Дом Старк — один из старейших и самых могущественных домов Семи Королевств. Они правят севером страны из своего замка Винтерфелл.",
  },
  {
    id: "lannister",
    name: "Дом Ланнистер",
    seat: "Кастерли Рок",
    leader: "Тайвин Ланнистер",
    motto: "Hear Me Roar",
    shieldX: 50,
    shieldY: 40,
    image: "/cards/lannister.png",
    cards: [
      { id: "cersei", title: "Серсея Ланнистер" },
      { id: "tyrion", title: "Тирион Ланнистер" },
      { id: "jaime", title: "Джейме Ланнистер" },
      { id: "tywin", title: "Тайвин Ланнистер" },
      { id: "hound", title: "Пёс (Сандор Клиган)" },
      { id: "mountain", title: "Гора (Григор Клиган)" },
      { id: "kevan", title: "Киван Ланнистер" },
    ],
    description:
      "Дом Ланнистер — один из богатейших и самых могущественных домов Семи Королевств. Они правят Западными землями из своего замка Кастерли Рок.",
  },
  {
    id: "baratheon",
    name: "Дом Баратеон",
    seat: "Драконий камень, Штормовой Предел",
    leader: "Станнис Баратеон, Ренли Баратеон",
    motto: "Ours is the Fury",
    shieldImage: "/cards/baratheon.png",
    cards: [
      { id: "stannis", title: "Станнис Баратеон" },
      { id: "davos", title: "Давос Сиворт" },
      { id: "melisandre", title: "Мелисандра" },
      { id: "renly", title: "Ренли Баратеон" },
      { id: "brienne", title: "Бриенна Тарт" },
      { id: "salador", title: "Саладор Саан" },
      { id: "patchface", title: "Пестряк" },
    ],
    description:
      "Дом Баратеон — один из могущественных домов Семи Королевств. Они правят Штормовым Пределом и Драконьим Камнем.",
  },
  {
    id: "greyjoy",
    name: "Дом Грейджой",
    seat: "Железные острова",
    leader: "Бейлон Грейджой",
    motto: "We Do Not Sow",
    shieldImage: "/cards/greyjoy.png",
    cards: [
      { id: "baylon", title: "Бейлон Грейджой" },
      { id: "euron", title: "Эурон Грейджой" },
      { id: "asha", title: "Аша Грейджой" },
      { id: "theon", title: "Теон Грейджой" },
      { id: "victarion", title: "Виктарион Грейджой" },
      { id: "aeron", title: "Эйрон Грейджой" },
      { id: "dagmer", title: "Дагмер Битый Рот" },
    ],
    description:
      "Дом Грейджой — один из могущественных домов Семи Королевств. Они правят Железными островами.",
  },
  {
    id: "tyrell",
    name: "Дом Тирелл",
    seat: "Хайгарден",
    leader: "Мейс Тирелл",
    motto: "Growing Strong",
    shieldImage: "/cards/tyrell.png",
    cards: [
      { id: "mace", title: "Мейс Тирелл" },
      { id: "margaery", title: "Маргери Тирелл" },
      { id: "loras", title: "Сир Лорас Тирелл" },
      { id: "olenna", title: "Королева Шипов (Оленна Тирелл)" },
      { id: "randyll", title: "Рэндилл Тарли" },
      { id: "garlan", title: "Сир Гарлан Тирелл" },
      { id: "florent", title: "Сир Алестер Флорент" },
    ],
    description:
      "Дом Тирелл — один из могущественных домов Семи Королевств. Они правят Хайгарденом.",
  },
  {
    id: "martell",
    name: "Дом Мартелл",
    seat: "Солнечные сады",
    leader: "Доран Мартелл",
    motto: "Unbowed, Unbent, Unbroken",
    shieldImage: "/cards/martell.png",
    cards: [
      { id: "doran", title: "Доран Мартелл" },
      { id: "oberyn", title: "Оберин Красная Гадюка Мартелл" },
      { id: "arianne", title: "Арианна Мартелл" },
      { id: "darkstar", title: "Герольд Тёмная Звезда" },
      { id: "areo", title: "Арео Хотах" },
      { id: "nymeria", title: "Нимерия Санд" },
      { id: "obara", title: "Обара Сенд" },
    ],
    description:
      "Дом Мартелл — один из могущественных домов Семи Королевств. Они правят Дорном.",
  },
  // Add more houses...

  // Houses from the "Mother of Dragons" expansion:
  {
    id: "arryn",
    name: "Дом Аррен",
    seat: "Орлиное Гнездо",
    leader: "Лиза Аррен, регент при сыне Роберте", // Example leader; adjust as needed
    motto: "As High as Honor",
    shieldImage: "/cards/arryn.png",
    cards: [
      { id: "doran", title: "Доран Мартелл" },
      { id: "oberyn", title: "Оберин Красная Гадюка Мартелл" },
      { id: "arianne", title: "Арианна Мартелл" },
      { id: "darkstar", title: "Герольд Тёмная Звезда" },
      { id: "areo", title: "Арео Хотах" },
      { id: "nymeria", title: "Нимерия Санд" },
      { id: "obara", title: "Обара Сенд" },
    ],
    description:
      "Дом Аррен — один из могущественных домов Семи Королевств. Они правят Долиной.",
  },
  {
    id: "targaryen",
    name: "Дом Таргариен",
    seat: "Пентос (в игре), Миэрин, Драконий камень",
    leader: "Дейенерис Таргариен",
    motto: "Fire and Blood",
    shieldImage: "/cards/targaryen.png",
    cards: [
      { id: "doran", title: "Доран Мартелл" },
      { id: "oberyn", title: "Оберин Красная Гадюка Мартелл" },
      { id: "arianne", title: "Арианна Мартелл" },
      { id: "darkstar", title: "Герольд Тёмная Звезда" },
      { id: "areo", title: "Арео Хотах" },
      { id: "nymeria", title: "Нимерия Санд" },
      { id: "obara", title: "Обара Сенд" },
    ],
    description:
      "Дом Таргариен — один из могущественных домов Семи Королевств. Они правили Семью Королевствами до свержения. Ныне последние представители дома в бегах за Узким морем, в Эссосе.",
  },
];
