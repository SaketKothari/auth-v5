"use client";

import { useRouter } from "next/navigation";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import { LoginForm } from "@/components/auth/login-form";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent
          className="p-0 w-auto bg-transparent border-none"
          aria-describedby={undefined}
        >
          <VisuallyHidden.Root>
            <DialogTitle>Login</DialogTitle>
          </VisuallyHidden.Root>
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
