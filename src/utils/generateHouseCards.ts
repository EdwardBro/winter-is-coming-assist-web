import { descriptions } from "@/data/descriptions";
import { HouseCard } from "@/types";

export const generateHouseCards = (houses: any): HouseCard[] =>
  houses.flatMap((house: any) =>
    house.cards.map((card: any) => {
      return {
        id: card.id,
        title: card.title,
        image: `/cards/${card.id}_card_ru.jpg`,
        description:
          descriptions[card.id] ??
          `Карта ${card.title}, принадлежащая дому ${house.faction}.`,
        faction: house.faction,
      };
    })
  );
