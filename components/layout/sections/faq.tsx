import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is this project free to use?",
    answer:
      "Yes! This is an open-source project under the MIT license. You can use it for personal or commercial projects, modify it, and distribute it freely.",
    value: "item-1",
  },
  {
    question: "What database does this project support?",
    answer:
      "This project uses PostgreSQL with Prisma ORM. You can use any PostgreSQL-compatible database like Neon, Supabase, or a self-hosted instance. You can also modify the Prisma schema to support other databases.",
    value: "item-2",
  },
  {
    question: "How do I set up OAuth providers (Google/GitHub)?",
    answer:
      "You need to create OAuth applications in the Google Cloud Console and GitHub Developer Settings. Then add the client ID and secret to your .env file. The callback URLs are automatically handled by Auth.js.",
    value: "item-3",
  },
  {
    question: "Can I add more OAuth providers?",
    answer:
      "Absolutely! Auth.js supports 50+ OAuth providers. Simply add the provider configuration in auth.config.ts and update your environment variables. Check the Auth.js documentation for the full list.",
    value: "item-4",
  },
  {
    question: "How does Two-Factor Authentication work?",
    answer:
      "When 2FA is enabled, users receive a 6-digit code via email after entering their credentials. This code is valid for a short time and must be entered to complete the login process.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
