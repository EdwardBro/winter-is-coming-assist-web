"use client";

import Accordion from "@/components/hints/Accordion";
import hintsData from "@/data/hints";
import { useTranslation } from "react-i18next";

export default function HintsPage() {
  const { t } = useTranslation();

  const items = hintsData.map((hint) => ({
    id: hint.id,
    title: t(`hints.${hint.id}.title`, {
      defaultValue: hint.title,
    }),
    icon: hint.coat_of_arms,
    content: (
      <div className="space-y-2">
        {hint.description?.map((paragraph, i) => (
          <p key={i} className="text-sm leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    ),
    beginnings: hint.beginnings?.length ? (
      <div className="space-y-2">
        {hint.beginnings.map((paragraph, i) => (
          <p key={i} className="text-sm leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    ) : undefined,
  }));

  const tips = t("hints.list", { returnObjects: true }) as string[];

  return (
    <div className="container mx-auto p-4">
      <h1 className="custom-header text-4xl font-bold my-6 text-center">
        {t("hints.title")}
      </h1>
      <p className="text-lg mb-4 text-center">{t("hints.intro")}</p>
      <ul className="space-y-4 max-w-2xl mx-auto">
        {tips.map((tip, index) => (
          <li
            key={index}
            className="border-2 border-gray-600 bg-black/20 rounded-xl p-4 text-white shadow-md text-center"
          >
            <strong>
              {t("hints.tip")} {index + 1}:
            </strong>
            {" " + tip}
          </li>
        ))}
      </ul>

      <br />

      <Accordion items={items} />
    </div>
  );
}
