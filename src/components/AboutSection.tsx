import React from "react";
import { Cloud, CreditCard, Smartphone, type LucideIcon } from "lucide-react";
import { useI18n } from "./languages/hook/useI18n";
import type { cardIconName, CardType } from "./languages/i18n";
import resumePdf from "@/assets/Kisang Hwang Resume-1.pdf";

const CARD_ICON: Record<cardIconName, LucideIcon> = {
  smartphone: Smartphone,
  creditCard: CreditCard,
  cloud: Cloud,
};

const Card = ({ data }: { data: CardType }): React.JSX.Element => {
  const Icon = CARD_ICON[data.iconName];

  return (
    <div className="gradient-border p-6 card-hover">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-lg"> {data.title}</h4>
          <p className="text-muted-foreground">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export const AboutSection = (): React.JSX.Element => {
  const { m } = useI18n();

  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {m.about.title}{" "}
          <span className="text-primary"> {m.about.subtitle}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{m.about.shortDesc}</h3>

            {m.about.paragraphs.map((paragraph: string, key: number) => {
              return (
                <p key={key} className="text-muted-foreground">
                  {paragraph}
                </p>
              );
            })}

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                {m.about.ctaContact}
              </a>

              <a
                href={resumePdf}
                download="KisangHwang_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {m.about.ctaResume}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {m.about.cards.map((card: CardType, key: number) => {
              return <Card key={key} data={card} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
