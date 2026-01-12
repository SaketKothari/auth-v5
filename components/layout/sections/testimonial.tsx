"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Alex Chen",
    userName: "Full Stack Developer",
    comment:
      "Finally, an auth solution that just works! Set up 2FA and OAuth in under an hour. The code quality is excellent and easy to customize.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah Mitchell",
    userName: "Startup Founder",
    comment:
      "This saved us weeks of development time. The email verification and password reset flows are production-ready out of the box.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "James Wilson",
    userName: "Security Engineer",
    comment:
      "Impressed by the security practices - bcrypt hashing, CSRF protection, and proper session handling. This is how auth should be done.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Emily Rodriguez",
    userName: "Frontend Developer",
    comment:
      "The UI components are beautiful and the dark mode support is seamless. Love how it integrates with shadcn/ui and Tailwind.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Michael Park",
    userName: "Tech Lead",
    comment:
      "We used this as a foundation for our SaaS app. The role-based access control and protected routes made it easy to build on top of.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Lisa Thompson",
    userName: "Indie Hacker",
    comment:
      "Best open-source auth template I've found for Next.js 14. The documentation is clear and the code is well-organized.",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          What Developers Are Saying
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
