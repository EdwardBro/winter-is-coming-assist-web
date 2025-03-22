import { descriptions } from "@/data/descriptions";
import { SimpleCard } from "@/types";

interface HouseInput {
  faction: string;
  cards: {
    id: string;
    title: string;
  }[];
}

export const generateHouseCards = (houses: HouseInput[]): SimpleCard[] => {
  return houses.flatMap((house) =>
    house.cards.map((card) => ({
      id: card.id,
      title: card.title,
      image: `/assets/cards/${card.id}_card_ru.jpg`,
      description:
        descriptions[card.id] ??
        `Карта ${card.title}, принадлежащая дому ${house.faction}.`,
      faction: house.faction,
    }))
  );
};
