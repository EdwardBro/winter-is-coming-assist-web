export interface HouseData {
  id: string;
  name: string;
  seat: string;
  leader: string;
  motto: string;
  shieldX?: number; // X coordinate on the map
  shieldY?: number; // Y coordinate on the map
  shieldImage?: string; // Optional: path to a shield icon or larger image
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
    shieldImage: "/assets/logos/stark_coa.jpg",
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
      "Дом Старк — древнейший род Севера, ведущий свою историю от Первых людей. Их девиз — 'Зима близко' — напоминает о суровости северной природы и необходимости быть готовым к испытаниям. Старки правят Винтерфеллом, их отличает честь, верность и суровый нрав. Веками они были защитниками Севера и хранителями старых традиций Вестероса. Эддард Старк — человек чести, являющийся хранителем Севера.",
  },
  {
    id: "lannister",
    name: "Дом Ланнистер",
    seat: "Кастерли Рок",
    leader: "Тайвин Ланнистер",
    motto: "Hear Me Roar",
    shieldX: 50,
    shieldY: 40,
    shieldImage: "/assets/logos/lannister_coa.jpg",
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
      "Дом Ланнистер — самый богатый и влиятельный род Западных земель. Их замок Кастерли Рок возвышается над золотыми шахтами, а девиз 'Услышь мой рёв!' говорит о гордости и амбициях. Ланнистеры известны своим умом, политической хитростью и умением платить долги. Их интриги и богатство часто меняют ход истории Вестероса. Тайвин Ланнистер — самый влиятельный человек в Вестеросе, и его слова — закон.",
  },
  {
    id: "baratheon",
    name: "Дом Баратеон",
    seat: "Драконий камень, Штормовой Предел",
    leader: "Станнис Баратеон, Ренли Баратеон",
    motto: "Ours is the Fury",
    shieldImage: "/assets/logos/baratheon_coa.jpg",
    cards: [
      { id: "stannis", title: "Станнис Баратеон" },
      { id: "davos", title: "Давос Сиворт" },
      { id: "melisandre", title: "Мелисандра" },
      { id: "renly", title: "Ренли Баратеон" },
      { id: "brienne", title: "Бриенна Тарт" },
      { id: "sallador", title: "Салладор Саан" },
      { id: "patchface", title: "Пестряк" },
    ],
    description:
      "Дом Баратеон — потомки древних королей Штормовых земель Дюрандонов, прославившиеся своей силой и упрямством. Их девиз 'Наша ярость — пламя!' отражает бурный характер рода. Баратеоны сыграли ключевую роль в свержении Таргариенов и часто оказываются в центре борьбы за Железный трон. Их символ — коронованный олень на золотом поле.",
  },
  {
    id: "greyjoy",
    name: "Дом Грейджой",
    seat: "Железные острова",
    leader: "Бейлон Грейджой",
    motto: "We Do Not Sow",
    shieldImage: "/assets/logos/greyjoy_coa.jpeg",
    cards: [
      { id: "baylon", title: "Бейлон Грейджой" },
      { id: "euron", title: "Эурон Грейджой" },
      { id: "asha", title: "Аша Грейджой" },
      { id: "theon", title: "Теон Грейджой" },
      { id: "victarion", title: "Виктарион Грейджой" },
      { id: "aeron", title: "Эйрон Мокроголовый" },
      { id: "dagmer", title: "Дагмер Битый Рот" },
    ],
    description:
      "Дом Грейджой — безбашенные владыки Железных островов, потомки пиратов и морских разбойников. Их девиз 'Мы не сеем' подчёркивает независимость и презрение к земледелию. Грейджои чтят древние обычаи Железнорождённых, таких как вера в Утонувшего бога, и совершают набеги на побережья. Они мечтают вернуть былую морскую славу и власть над побережьем Вестероса. Бейлон Грейджой — в прошлом неудавшийся мятежник против Роберта Баратеона и Эддарда Старка, после смерти Роберта заявил свои претензии на корону древних королей Железных островов.",
  },
  {
    id: "tyrell",
    name: "Дом Тирелл",
    seat: "Хайгарден",
    leader: "Мейс Тирелл",
    motto: "Growing Strong",
    shieldImage: "/assets/logos/tyrell_coa.jpg",
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
      "Дом Тирелл — правители плодородного Простора, известные своим богатством, дипломатией и изяществом. Их замок Хайгарден — центр рыцарской культуры и пышных празднеств. Девиз 'Проростая крепнем' символизирует процветание и амбиции рода. Тиреллы славятся умением плести интриги и заключать выгодные союзы.",
  },
  {
    id: "martell",
    name: "Дом Мартелл",
    seat: "Солнечные сады",
    leader: "Доран Мартелл",
    motto: "Unbowed, Unbent, Unbroken",
    shieldImage: "/assets/logos/martell_coa.jpg",
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
      "Дом Мартелл — гордые и независимые правители жаркого Дорна. Их девиз 'Несклонённые, несгибаемые, несломленные' отражает дух народа, веками сопротивлявшегося завоевателям. Дорн - единственное королевство, которое не подчинилось власти Таргариенов. Однако, сделало это позже засчёт взаимовыгодного брака Мирии Мартелл с королём Дейроном ІІ Таргариеном. Мартеллы славятся страстью, необычными обычаями и вольными нравами. Их земли — край песков, солнца и ядовитых интриг.",
  },
  // House cards from the "Feast for crows" expansion:

  {
    id: "arryn",
    name: "Дом Аррен",
    seat: "Орлиное Гнездо",
    leader: "Лиза Аррен, регент при сыне Роберте", // Example leader; adjust as needed
    motto: "As High as Honor",
    shieldImage: "/cards/arryn.png",
    cards: [
      { id: "lysa", title: "Лиза Аррен" },
      { id: "petyr", title: "Петир Бейлиш" },
      /*      { id: "arianne", title: "лоханка с супом" },
      { id: "arianne", title: "лоханка с супом" },
      { id: "arianne", title: "лоханка с супом" },
      { id: "arianne", title: "лоханка с супом" },
      { id: "arianne", title: "лоханка с супом" },*/
    ],
    description:
      "Дом Аррен — один из могущественных домов Семи Королевств. Они правят Долиной.",
  },

  // Houses from the "Mother of Dragons" expansion:
  {
    id: "arryn",
    name: "Дом Аррен",
    seat: "Орлиное Гнездо",
    leader: "Лиза Аррен, регент при сыне Роберте", // Example leader; adjust as needed
    motto: "As High as Honor",
    shieldImage: "/cards/arryn.png",
    cards: [
      /*{ id: "lysa", title: "Лиза Аррен" },
      { id: "petyr", title: "Петир Бейлиш" },
      { id: "arianne", title: "лоханка с супом" },
      { id: "arianne", title: "лоханка с супом" },
      { id: "arianne", title: "лоханка с супом" },
      { id: "arianne", title: "лоханка с супом" },
      { id: "arianne", title: "лоханка с супом" },*/
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
      /*      { id: "arianne", title: "лоханка с супом" },
      { id: "arianne", title: "лоханка с супом" },
      { id: "arianne", title: "лоханка с супом" },
      { id: "arianne", title: "лоханка с супом" },
      { id: "arianne", title: "лоханка с супом" },
      { id: "arianne", title: "лоханка с супом" },
      { id: "arianne", title: "лоханка с супом" },*/
    ],
    description:
      "Дом Таргариен — один из могущественных домов Семи Королевств. Они правили Семью Королевствами до свержения. Ныне последние представители дома в бегах за Узким морем, в Эссосе.",
  },
];
