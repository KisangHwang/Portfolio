import React, { useState } from "react";
import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "./languages/hook/useI18n";
import type { ContactInfoName, ContactInfoType } from "./languages/i18n";

const CONTACT_INFO_ICON: Record<ContactInfoName, LucideIcon> = {
  email: Mail,
  phone: Phone,
  location: MapPin,
};

const contactAcion = (data: ContactInfoType): string => {
  switch (data.type) {
    case "email":
      return `mailto:${data.data}`;
    case "phone":
      return `tel:${data.data}`;
    case "location":
      return `#contact`;
  }
};

const ContactCard = ({
  item,
}: {
  item: ContactInfoType;
}): React.JSX.Element => {
  const Icon = CONTACT_INFO_ICON[item.type];

  return (
    <div className="flex items-start space-x-4">
      <div className="p-3 rounded-full bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />{" "}
      </div>
      <div>
        <h4 className="font-medium"> {item.label}</h4>
        <a
          href={contactAcion(item)}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {item.data}
        </a>
      </div>
    </div>
  );
};

export const ContactSection = () => {
  const { m } = useI18n();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: m.contact.toast.title,
        description: m.contact.toast.description,
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {m.contact.title}{" "}
          <span className="text-primary"> {m.contact.subtitle}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {m.contact.shortDesc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              {m.contact.infoTitle}
            </h3>

            <div className="space-y-6 justify-center">
              {m.contact.items.map((item: ContactInfoType, key: number) => {
                return <ContactCard key={key} item={item} />;
              })}
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> {m.contact.connectTitle}</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/kisang-hwang-068745219"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              {m.contact.formTitle}
            </h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  {m.contact.fields.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder={m.contact.fields.namePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  {m.contact.fields.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder={m.contact.fields.emailPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  {m.contact.fields.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder={m.contact.fields.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting
                  ? `${m.contact.actions.submitting}`
                  : `${m.contact.actions.submit}`}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
