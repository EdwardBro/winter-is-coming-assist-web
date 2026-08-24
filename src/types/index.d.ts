/**
 * Interface for a navigation link.
 * Represents an item in the application's navigation menu.
 */

export interface NavLink {
  label: string;
  href: string;
}
// Expansion keys — kept in sync with data/expansionMap.ts and the
// rules.expansions.* keys in the locale files.
export type Expansion =
  | "BASE"
  | "A FEAST FOR CROWS"
  | "MOTHER OF DRAGONS"
  | "A DANCE WITH DRAGONS";

// Reference to a single house card within one specific expansion.
export interface HouseCardRef {
  id: string;
  title: string;
}

// Cards a house has for one expansion. Usually a flat list; some
// expansions ship more than one alternate print set for a house (e.g.
// House Targaryen's "Mother of Dragons" Набор А / Набор Б, chosen for
// game balance depending on which decks the other houses use) — in that
// case it's a map from a free-form variant label to that set's cards.
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
