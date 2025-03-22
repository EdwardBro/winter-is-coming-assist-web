import Accordion from "@/components/hints/Accordion";
import hintsData from "@/data/hints";

export default function HintsPage() {
  const items = hintsData.map((hint) => ({
    id: hint.id,
    title: hint.title,
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
    beginnings: (
      <div className="space-y-2">
        {hint.beginnings?.map((paragraph, i) => (
          <p key={i} className="text-sm leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    ),
  }));

  return (
    <div className="container mx-auto p-4">
      <h1 className="custom-header text-4xl font-bold mb-8 text-center">
        Hints
      </h1>
      <p className="text-lg mb-4 text-center">
        Here you will find tips and tricks to improve your gameplay.
      </p>
      <ul className="list-disc list-inside">
        <li>Tip 1: Always plan your moves ahead.</li>
        <li>Tip 2: Understand your opponent's strategy.</li>
        <li>Tip 3: Use your resources wisely.</li>
      </ul>
      <Accordion items={items} />
    </div>
  );
}
