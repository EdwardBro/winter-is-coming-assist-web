export default function ExtraPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="custom-header text-4xl font-bold mb-8 text-center">
        Extra
      </h1>
      <p className="text-lg mb-4">
        Here you will find character biographies and interesting lore snippets
        without the heaviness.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4 shadow">
          <h2 className="text-2xl font-bold mb-2">House Stark</h2>
          <p>
            Discover the rich history and fate of the Stark family along with
            key character insights.
          </p>
        </div>
        <div className="border rounded-lg p-4 shadow">
          <h2 className="text-2xl font-bold mb-2">House Lannister</h2>
          <p>
            Learn some interesting lore and lesser-known facts about the
            Lannisters.
          </p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}
