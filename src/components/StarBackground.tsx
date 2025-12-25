import type React from "react";
import { useEffect, useState } from "react";

type StarType = {
  id: number;
  size: string;
  x: string;
  y: string;
  opacity: number;
  animationDuration: string;
};

type MeteorType = {
  id: number;
  size: number;
  seed: number;
  x: string;
  y: string;
  delay: string;
  animationDuration: string;
};

const generateStars = (): StarType[] => {
  const numberOfStars: number = Math.floor(
    (window.innerWidth * window.innerHeight) / 10000
  );

  return Array.from({ length: numberOfStars }, (_, index) => ({
    id: index,
    size: `${Math.random() * 3 + 1}px`,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.5 + 0.5,
    animationDuration: `${Math.random() * 4 + 2}s`,
  }));
};

const randomMeteor = (id: number, seed: number): MeteorType => ({
  id,
  seed,
  size: Math.random() * 2 + 1,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 20}%`,
  delay: `${Math.random() * 15}s`,
  animationDuration: `${Math.random() * 3 + 3}s`,
});

const generateMeteors = (): MeteorType[] =>
  Array.from({ length: 6 }, (_, index) => randomMeteor(index, 0));

export const StarBackground = (): React.JSX.Element => {
  const [stars, setStars] = useState<StarType[]>(() =>
    typeof window === "undefined" ? [] : generateStars()
  );

  const [meteors, setMeteors] = useState<MeteorType[]>(() =>
    typeof window === "undefined" ? [] : generateMeteors()
  );

  const respawnMeteor = (id: number): void => {
    setMeteors((prev) => {
      return prev.map((m: MeteorType) =>
        m.id === id ? randomMeteor(id, m.seed + 1) : m
      );
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setStars(generateStars());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size,
            height: star.size,
            left: star.x,
            top: star.y,
            opacity: star.opacity,
            animationDuration: star.animationDuration,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={`${meteor.id}-${meteor.seed}`}
          className="meteor animate-meteor"
          onAnimationEnd={() => respawnMeteor(meteor.id)}
          style={{
            width: meteor.size * 30 + "px",
            height: meteor.size + "px",
            left: meteor.x,
            top: meteor.y,
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration,
            animationIterationCount: 1,
            animationFillMode: "forwards",
          }}
        />
      ))}
    </div>
  );
};
