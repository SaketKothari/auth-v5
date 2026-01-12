"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Rocket",
    title: "Quick Setup",
    description:
      "Get authentication running in minutes, not days. Pre-built components and server actions ready to use.",
  },
  {
    icon: "Shield",
    title: "Production Ready",
    description:
      "Battle-tested security patterns with bcrypt hashing, CSRF protection, and secure session handling.",
  },
  {
    icon: "Paintbrush",
    title: "Fully Customizable",
    description:
      "Built with shadcn/ui and Tailwind CSS. Easily customize colors, styles, and components to match your brand.",
  },
  {
    icon: "Code",
    title: "Developer Friendly",
    description:
      "Clean, TypeScript codebase with Zod validation, React Hook Form, and comprehensive documentation.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Auth V5?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Stop reinventing the wheel. This authentication toolkit gives you
            everything you need to secure your Next.js application with modern
            best practices and beautiful UI components.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
