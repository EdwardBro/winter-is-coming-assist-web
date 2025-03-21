export default function HintsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="custom-header text-4xl font-bold mb-8 text-center">
        Hints
      </h1>
      <p className="text-lg mb-4">
        Here you will find tips and tricks to improve your gameplay.
      </p>
      <ul className="list-disc list-inside">
        <li>Tip 1: Always plan your moves ahead.</li>
        <li>Tip 2: Understand your opponent's strategy.</li>
        <li>Tip 3: Use your resources wisely.</li>
      </ul>
    </div>
  );
}
