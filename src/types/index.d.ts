/**
 * Interface for a navigation link.
 * Represents an item in the application's navigation menu.
 */

export interface NavLink {
  label: string;
  href: string;
}
export interface HouseCard {
  id: string;
  title: string;
  image?: string; // Path to the card image in public folder.
  description?: string;
  faction: string;
  cards: { id: string; title: string }[];
  // Можно добавить дополнительные поля, если понадобится
  // Например, lang: string;
  // Или дополнительные параметры для сортировки
}

export interface SimpleCard {
  id: string;
  title: string;
  image?: string;
  description?: string;
  faction: string;
}
