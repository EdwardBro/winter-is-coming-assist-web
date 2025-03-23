import { descriptions } from "@/data/descriptions";
import { SimpleCard } from "@/types";

interface HouseInput {
  faction: string;
  cards: {
    id: string;
    title: string;
  }[];
}

const extensions = ["webp", "jpg", "png", "jpeg", "gif"];

/**
 * Пытается найти существующий файл среди расширений
 */
const findImage = async (cardId: string): Promise<string | null> => {
  for (const ext of extensions) {
    const path = `/assets/cards/house_cards/${cardId}_card_ru.${ext}`;

    try {
      const res = await fetch(path, { method: "HEAD" });
      if (res.ok) return path;
    } catch (e) {
      console.error(e); // Если fetch упал, пропускаем
    }
  }

  // Фолбэк
  console.warn(`Image not found for card: ${cardId}`);
  return null;
};

export const generateHouseCards = async (
  houses: HouseInput[]
): Promise<SimpleCard[]> => {
  const cardTasks: Promise<SimpleCard | null>[] = [];

  for (const house of houses) {
    for (const card of house.cards) {
      const task = (async (): Promise<SimpleCard | null> => {
        const imagePath = await findImage(card.id);
        if (!imagePath) return null;

        return {
          id: card.id,
          title: card.title,
          image: imagePath,
          description:
            descriptions[card.id] ??
            `Карта ${card.title}, принадлежащая дому ${house.faction}.`,
          faction: house.faction,
        };
      })();

      cardTasks.push(task);
    }
  }

  const results = await Promise.all(cardTasks);
  return results.filter((card): card is SimpleCard => card !== null);
};
