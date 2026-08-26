export interface NavLink {
  label: string;
  href: string;
}

// Kept in sync with data/expansionMap.ts and rules.expansions.* in the locale files.
export type Expansion =
  | "BASE"
  | "A FEAST FOR CROWS"
  | "MOTHER OF DRAGONS"
  | "A DANCE WITH DRAGONS";

export interface HouseCardRef {
  id: string;
  title: string;
}

// A Record when a house has multiple print-set variants for one expansion
// (e.g. Targaryen's two "Mother of Dragons" decks); otherwise a flat list.
export type HouseCardSet = HouseCardRef[] | Record<string, HouseCardRef[]>;

export interface SimpleCard {
  id: string;
  title: string;
  image: string;
  description?: string;
  faction: string;
  expansion: Expansion;
  variant?: string;
}
