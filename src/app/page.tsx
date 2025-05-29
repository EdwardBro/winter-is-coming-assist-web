"use client";
import { useTranslation } from "react-i18next";
import AshParticles from "@/features/AshParticles/AshParticles";
import Link from "next/link";
import DonationButton from "@/components/DonationButton";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex flex-col">
      <AshParticles />
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-screen h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{ 
          backgroundImage: "url('/assets/got_background.jpg')"
        }}
      ></div>
      <section className="relative flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="custom-header text-5xl font-bold mb-4">
            {t("home.title")}
          </h1>
          <p className="text-lg text-gray-400 mb-10">{t("home.description")}</p>

          <Link
            href="/rules"
            className="bg-gradient-to-r from-red-900 to-gray-800 text-white text-2xl font-bold px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            {t("home.button")}
          </Link>
          <p className="text-xl text-gray-200 mt-12 font-semibold">
            {t("home.cta")}
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-white">{t("home.feature1.title")}</h3>
            <p className="text-gray-300">{t("home.feature1.desc")}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-white">{t("home.feature2.title")}</h3>
            <p className="text-gray-300">{t("home.feature2.desc")}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-white">{t("home.feature3.title")}</h3>
            <p className="text-gray-300">{t("home.feature3.desc")}</p>
          </div>
        </div>

        <div className="hidden md:flex justify-center mt-24 mb-16">
          <DonationButton />
        </div>
      </section>
    </div>
  );
}
