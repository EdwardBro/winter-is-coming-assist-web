import type { Expansion, HouseCardRef, HouseCardSet } from "@/types";

export interface HouseData {
  id: string;
  name: string;
  seat: string;
  leader: string;
  motto: string;
  shieldX?: number;
  shieldY?: number;
  shieldImage?: string;
  cardsByExpansion: Partial<Record<Expansion, HouseCardSet>>;
  description?: string;
}

export interface HouseCardEntry {
  card: HouseCardRef;
  expansion: Expansion;
  variant?: string;
}

// A house's cards tagged with expansion/variant provenance.
export function getHouseCardEntries(house: HouseData): HouseCardEntry[] {
  const entries: HouseCardEntry[] = [];

  for (const [expansion, set] of Object.entries(house.cardsByExpansion) as [
    Expansion,
    HouseCardSet
  ][]) {
    if (Array.isArray(set)) {
      for (const card of set) entries.push({ card, expansion });
    } else {
      for (const [variant, cards] of Object.entries(set)) {
        for (const card of cards) entries.push({ card, expansion, variant });
      }
    }
  }

  return entries;
}

// A house's cards flattened, without provenance.
export function getHouseCards(house: HouseData): HouseCardRef[] {
  return getHouseCardEntries(house).map((entry) => entry.card);
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
    cardsByExpansion: {
      BASE: [
        { id: "ned", title: "Эддард Старк" },
        { id: "catelyn", title: "Кейтилин Старк" },
        { id: "robb", title: "Робб Старк" },
        { id: "roose", title: "Рус Болтон" },
        { id: "brynden", title: "Бринден Чёрная Рыба Талли" },
        { id: "rodrik", title: "Сир Родрик Кассель" },
        { id: "umber", title: "Большой Джон Амбер" },
      ],
      // TODO: second Stark deck from "A Dance with Dragons" — card list and
      // ids to be filled in once available.
    },
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
    cardsByExpansion: {
      BASE: [
        { id: "cersei", title: "Серсея Ланнистер" },
        { id: "tyrion", title: "Тирион Ланнистер" },
        { id: "jaime", title: "Джейме Ланнистер" },
        { id: "tywin", title: "Тайвин Ланнистер" },
        { id: "hound", title: "Пёс (Сандор Клиган)" },
        { id: "mountain", title: "Гора (Григор Клиган)" },
        { id: "kevan", title: "Киван Ланнистер" },
      ],
      // TODO: second Lannister deck from "A Dance with Dragons".
    },
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
    cardsByExpansion: {
      BASE: [
        { id: "stannis", title: "Станнис Баратеон" },
        { id: "davos", title: "Давос Сиворт" },
        { id: "melisandre", title: "Мелисандра" },
        { id: "renly", title: "Ренли Баратеон" },
        { id: "brienne", title: "Бриенна Тарт" },
        { id: "sallador", title: "Салладор Саан" },
        { id: "patchface", title: "Пестряк" },
      ],
      // TODO: second Baratheon deck from "A Dance with Dragons".
    },
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
    cardsByExpansion: {
      BASE: [
        { id: "baylon", title: "Бейлон Грейджой" },
        { id: "euron", title: "Эурон Грейджой" },
        { id: "asha", title: "Аша Грейджой" },
        { id: "theon", title: "Теон Грейджой" },
        { id: "victarion", title: "Виктарион Грейджой" },
        { id: "aeron", title: "Эйрон Мокроголовый" },
        { id: "dagmer", title: "Дагмер Битый Рот" },
      ],
      // TODO: second Greyjoy deck from "A Dance with Dragons".
    },
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
    cardsByExpansion: {
      BASE: [
        { id: "mace", title: "Мейс Тирелл" },
        { id: "margaery", title: "Маргери Тирелл" },
        { id: "loras", title: "Сир Лорас Тирелл" },
        { id: "olenna", title: "Королева Шипов (Оленна Тирелл)" },
        { id: "randyll", title: "Рэндилл Тарли" },
        { id: "garlan", title: "Сир Гарлан Тирелл" },
        { id: "florent", title: "Сир Алестер Флорент" },
      ],
      // TODO: second Tyrell deck from "A Dance with Dragons".
    },
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
    cardsByExpansion: {
      BASE: [
        { id: "doran", title: "Доран Мартелл" },
        { id: "oberyn", title: "Оберин Красная Гадюка Мартелл" },
        { id: "arianne", title: "Арианна Мартелл" },
        { id: "darkstar", title: "Герольд Тёмная Звезда" },
        { id: "areo", title: "Арео Хотах" },
        { id: "nymeria", title: "Нимерия Санд" },
        { id: "obara", title: "Обара Сенд" },
      ],
      // TODO: second Martell deck from "A Dance with Dragons".
    },
    description:
      "Дом Мартелл — гордые и независимые правители жаркого Дорна. Их девиз 'Несклонённые, несгибаемые, несломленные' отражает дух народа, веками сопротивлявшегося завоевателям. Дорн - единственное королевство, которое не подчинилось власти Таргариенов. Однако, сделало это позже засчёт взаимовыгодного брака Мирии Мартелл с королём Дейроном ІІ Таргариеном. Мартеллы славятся страстью, необычными обычаями и вольными нравами. Их земли — край песков, солнца и ядовитых интриг.",
  },
  {
    id: "arryn",
    name: "Дом Аррен",
    seat: "Орлиное Гнездо",
    leader: "Лиза Аррен, регент при сыне Роберте", // Example leader; adjust as needed
    motto: "As High as Honor",
    shieldImage: "/cards/arryn.png",
    cardsByExpansion: {
      "A FEAST FOR CROWS": [
        { id: "lysa", title: "Лиза Аррен" },
        { id: "petyr", title: "Петир Бейлиш" },
      ],
      // TODO: House Arryn deck from "Mother of Dragons" — card list, ids
      // and images differ from the "A Feast for Crows" deck above (some
      // card names repeat but stats/effects are different) and are not
      // available yet.
      "MOTHER OF DRAGONS": [],
    },
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
    cardsByExpansion: {
      "MOTHER OF DRAGONS": {
        // Набор А — используется, когда остальные дома играют базовыми
        // колодами + колодой Аррен из "Матери драконов".
        // TODO: состав 7 карт пока не внесён.
        A: [],
        // Набор Б — используется, когда остальные дома играют колодами из
        // "Танца с драконами" + колодой Аррен из "Пира для воронов".
        // TODO: состав 7 карт пока не внесён.
        B: [],
      },
    },
    description:
      "Дом Таргариен — один из могущественных домов Семи Королевств. Они правили Семью Королевствами до свержения. Ныне последние представители дома в бегах за Узким морем, в Эссосе.",
  },
];
