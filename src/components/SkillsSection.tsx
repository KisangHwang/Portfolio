import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type SkillType = {
  name: string;
  level: number;
  category: string;
};

const skills: SkillType[] = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories: string[] = ["all", "frontend", "backend", "tools"];
const duration = 1200;

export const SkillsSection = (): React.JSX.Element => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const [counts, setCounts] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    for (const s of skills) init[s.name] = 0;
    return init;
  });

  const filteredSkills: SkillType[] = skills.filter(
    (skill: SkillType) =>
      activeCategory === "all" || skill.category === activeCategory
  );

  useEffect(() => {
    if (hasAnimated) return;
    if (typeof window === "undefined") return;
    if (!sectionRef.current) return;

    const el = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const start = performance.now();

    const animate = (now: number) => {
      const t = Math.min((now - start) / duration, 1);

      setCounts(() => {
        const next: Record<string, number> = {};
        for (const s of skills) {
          next[s.name] = Math.round(s.level * t);
        }

        return next;
      });

      if (t < 1) requestAnimationFrame(animate);
    };

    const rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [hasAnimated]);

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
      ref={sectionRef}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category: string, key: number) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill: SkillType, key: number) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "bg-primary h-2 rounded-full",
                    `transition-[width] duration-${duration} ease-out`,
                    "will-change-[width]"
                  )}
                  //    origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: hasAnimated ? `${skill.level}%` : "0%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground tabular-nums">
                  {hasAnimated ? counts[skill.name] ?? 0 : 0}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
