import type React from "react";
import { ArrowDown, Github, Linkedin } from "lucide-react";

import profileImg from "@/assets/profileImageFull.jpg";
import { cn } from "@/lib/utils";

export const HeroSection = (): React.JSX.Element => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24"
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 z-10">
        {/* Text */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <div className="space-y-6 mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Pedro
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Machado
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
              I create stellar web experiences with modern technologies.
              Specializing in front-end development, I build interfaces that are
              both beautiful and functional.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button inline-flex">
                View My Work
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end opacity-0 animate-fade-in-delay-5">
          <div className="w-full max-w-sm lg:max-w-none">
            <div
              className={cn(
                "w-full rounded-2xl p-5",
                "bg-background/40 backdrop-blur-md",
                "border border-border/60 shadow-lg"
              )}
            >
              <div className="flex flex-col items-center text-center gap-3">
                <img
                  src={profileImg}
                  alt="Kisang Hwang"
                  className="size-28 md:size-36 lg:size-48 rounded-xl object-cover ring-2 ring-border/70"
                />

                <div className="mt-1 text-md text-foreground/70">
                  React Native Engineer — Full Stack (TS / AWS)
                </div>

                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/YOUR_ID"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Kinsag Hwang LinkedIn"
                    className={cn(
                      "h-9 w-9 rounded-lg grid place-items-center",
                      "bg-background/70 backdrop-blur border border-border/60 shadow-sm",
                      "hover:text-primary transition-colors duration-300"
                    )}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>

                  <a
                    href="https://github.com/YOUR_ID"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Kinsag Hwang GitHub"
                    className={cn(
                      "h-9 w-9 rounded-lg grid place-items-center",
                      "bg-background/70 backdrop-blur border border-border/60 shadow-sm",
                      "hover:text-primary transition-colors duration-300"
                    )}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-30 transform flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
