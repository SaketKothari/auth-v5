import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />

              <h3 className="text-2xl">Auth Service</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Resources</h3>
            <div>
              <Link
                href="https://github.com/SaketKothari/auth-v5"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                GitHub
              </Link>
            </div>

            <div>
              <Link
                href="https://authjs.dev"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                Auth.js Docs
              </Link>
            </div>

            <div>
              <Link
                href="https://nextjs.org/docs"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                Next.js Docs
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Tech Stack</h3>
            <div>
              <Link
                href="https://ui.shadcn.com"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                shadcn/ui
              </Link>
            </div>

            <div>
              <Link
                href="https://www.prisma.io"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                Prisma
              </Link>
            </div>

            <div>
              <Link
                href="https://resend.com"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                Resend
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link
                href="https://github.com/SaketKothari/auth-v5/issues"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                Report Issue
              </Link>
            </div>

            <div>
              <Link href="#features" className="opacity-60 hover:opacity-100">
                Features
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Connect</h3>
            <div>
              <Link
                href="https://github.com/SaketKothari"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                GitHub
              </Link>
            </div>

            <div>
              <Link
                href="https://linkedin.com/in/saketkothari"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                LinkedIn
              </Link>
            </div>

            <div>
              <Link
                href="https://twitter.com/SaketKothari"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2026 Designed and developed by
            <Link
              target="_blank"
              href="https://github.com/SaketKothari"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Saket Kothari
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
