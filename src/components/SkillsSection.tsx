import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "./languages/hook/useI18n";
import type { SkillCategory, SkillItemType } from "./languages/i18n";

const duration = 1200;

export const SkillsSection = (): React.JSX.Element => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  const { m } = useI18n();

  const categoryKeys = Object.keys(m.skills.categories) as Array<
    keyof typeof m.skills.categories
  >;
  type CategoryKey = (typeof categoryKeys)[number];

  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const [counts, setCounts] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    for (const s of m.skills.items) init[s.name] = 0;
    return init;
  });

  const filteredSkills: SkillItemType[] = m.skills.items.filter(
    (skill: SkillItemType) =>
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
        for (const s of m.skills.items) {
          next[s.name] = Math.round(s.level * t);
        }

        return next;
      });

      if (t < 1) requestAnimationFrame(animate);
    };

    const rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [hasAnimated, m.skills.items]);

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30"
      ref={sectionRef}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {m.skills.title}{" "}
          <span className="text-primary"> {m.skills.subtitle}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categoryKeys.map((category: SkillCategory, key: number) => (
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
              {m.skills.categories[category]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill: SkillItemType, key: number) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full transition-[width] ease-out will-change-[width]"
                  style={{
                    width: hasAnimated ? `${skill.level}%` : "0%",
                    transitionDuration: `${duration}ms`,
                  }}
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
