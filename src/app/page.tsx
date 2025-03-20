/*import Image from "next/image";*/
import AshParticles from "@/features/AshParticles/AshParticles";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AshParticles />
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/assets/got.jpg')" }}
      ></div>
      <section className="relative min-h-screen container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="custom-header text-5xl font-bold mb-4">
            Game of Thrones Assist App
          </h1>
          <p className="text-xl text-gray-500 mb-4">
            Your assistant for mastering complex board game rules.
          </p>
          <p className="text-xl text-gray-200 mb-10 font-semibold">
            Become the one Ruler of Westeros!
          </p>

          <Link
            href="/rules"
            className="bg-gradient-to-r from-red-900 via-gray to-gray-800 text-white text-2xl font-bold px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            View Rules
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="p-6 border rounded-lg shadow-sm bg-black rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Easy Navigation</h3>
            <p className="text-gray-600">
              Quickly access rules and guides for a smooth gameplay experience.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-black">
            <h3 className="text-xl font-semibold mb-2">Interactive FAQ</h3>
            <p className="text-gray-600">
              Get instant answers to your questions with our interactive FAQ.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-black">
            <h3 className="text-xl font-semibold mb-2">Detailed Guides</h3>
            <p className="text-gray-600">
              In-depth strategies and tips to help you master the game.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
