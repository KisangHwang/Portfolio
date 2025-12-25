import {
  Apple,
  ArrowRight,
  ExternalLink,
  Github,
  Play,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "./languages/hook/useI18n";
import type {
  ProjectPlatform,
  ProjectType,
  ProjectUrlType,
} from "./languages/i18n";
import type React from "react";

const PLATFORM_ICON: Record<ProjectPlatform, LucideIcon> = {
  appstore: Apple,
  playstore: Play,
  github: Github,
  demo: ExternalLink,
};

const UrlIcons = ({ item }: { item: ProjectUrlType }): React.JSX.Element => {
  const Icon = PLATFORM_ICON[item.platform];

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      aria-label={item.label ?? item.platform}
      className="text-foreground/80 hover:text-primary transition-colors duration-300"
    >
      <Icon size={20} />
    </a>
  );
};
export const ProjectsSection = () => {
  const { m } = useI18n();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {m.projects.title}{" "}
          <span className="text-primary"> {m.projects.subtitle} </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {m.projects.shortDesc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {m.projects.items.map((project: ProjectType, key: number) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag: string, key: number) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.urls.map((url: ProjectUrlType, key: number) => {
                      return <UrlIcons key={key} item={url} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href={m.projects.actionUrl}
          >
            {m.projects.actionButton} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
