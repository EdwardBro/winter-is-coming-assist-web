import { descriptions } from "@/data/descriptions";
import { getHouseCardEntries, houses } from "@/data/houses";
import { imageMap } from "@/data/imageMap";
import { SimpleCard } from "@/types";

export const generateHouseCards = (): SimpleCard[] => {
  const cards: SimpleCard[] = [];

  for (const house of houses) {
    for (const { card, expansion, variant } of getHouseCardEntries(house)) {
      const image = imageMap[card.id];

      if (!image) {
        console.warn(`⚠️ No image for card: ${card.id}`);
        continue;
      }

      cards.push({
        id: card.id,
        title: card.title,
        image,
        description:
          descriptions[card.id] ??
          `Карта ${card.title}, принадлежащая дому ${house.name}`,
        faction: house.id,
        expansion,
        variant,
      });
    }
  }

  return cards;
};
