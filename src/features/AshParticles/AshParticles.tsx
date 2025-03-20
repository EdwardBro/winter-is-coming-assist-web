"use client";

import React, { useEffect, useState } from "react";
import "./styles.css";

interface Particle {
  id: number;
  left: number; // в процентах от ширины экрана
  delay: number; // задержка анимации в секундах
  duration: number; // длительность анимации в секундах
  xOffset: number; // горизонтальное смещение, в пикселях (от -50 до +50)
}

const NUM_PARTICLES = 50;

const AshParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from(
      { length: NUM_PARTICLES },
      (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 3, // длительность от 3 до 6 секунд
        xOffset: Math.random() * 100 + 100,
      })
    );
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="ash-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="ash"
          style={
            {
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              "--x-offset": `${p.xOffset}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default AshParticles;
