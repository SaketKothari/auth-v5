import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "ShieldCheck",
    title: "Two-Factor Authentication",
    description:
      "Add an extra layer of security with email-based 2FA codes. Protect your users' accounts from unauthorized access.",
  },
  {
    icon: "KeyRound",
    title: "OAuth Integration",
    description:
      "Seamless social login with Google and GitHub. Let users sign in with their existing accounts in one click.",
  },
  {
    icon: "Mail",
    title: "Email Verification",
    description:
      "Verify user emails before granting access. Reduce spam accounts and ensure genuine registrations.",
  },
  {
    icon: "Lock",
    title: "Secure Password Reset",
    description:
      "Token-based password recovery flow. Users can safely reset their passwords via email links.",
  },
  {
    icon: "UserCog",
    title: "Role-Based Access",
    description:
      "Built-in Admin and User roles with protected routes. Control who can access what in your application.",
  },
  {
    icon: "Fingerprint",
    title: "JWT Sessions",
    description:
      "Stateless, secure session management using JSON Web Tokens. Scale your app without session storage worries.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Everything You Need for Secure Authentication
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Built with Auth.js v5 and Next.js 14, this toolkit provides
        enterprise-grade security features out of the box. No need to build auth
        from scratch.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
