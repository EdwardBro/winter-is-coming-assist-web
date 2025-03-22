import { descriptions } from "@/data/descriptions";
import { HouseCard } from "@/types";
import fs from "fs";
import path from "path";

export const generateHouseCards = (houses: any): HouseCard[] =>
  houses.flatMap((house: any) =>
    house.cards.map((card: any) => {
      /*      const extension = ["jpg", "png", "jpeg", "gif"].find((ext) =>
        fetch(`/cards/${card.id}_card_ru.${ext}`, { method: "HEAD" })
          .then((response) => response.ok)
          .catch(() => false)
      );*/

      /*      function getImage(cardId: string): string {
        const extensions = ["webp", "jpg", "png", "jpeg", "gif"];
        const baseDir = path.resolve("public/cards");

        for (const ext of extensions) {
          const fullPath = path.join(baseDir, `${cardId}_card_ru.${ext}`);
          if (fs.existsSync(fullPath)) {
            return `/cards/${cardId}_card_ru.${ext}`;
          }
        }

        return "/cards/default_card.webp";
      }*/

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
