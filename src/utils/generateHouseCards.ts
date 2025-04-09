import { descriptions } from "@/data/descriptions";
import { houses } from "@/data/houses";
import { imageMap } from "@/data/imageMap";
import { SimpleCard } from "@/types";

export const generateHouseCards = (): SimpleCard[] => {
  const cards: SimpleCard[] = [];

  for (const house of houses) {
    for (const card of house.cards) {
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
      });
    }
  }

  return cards;
};
