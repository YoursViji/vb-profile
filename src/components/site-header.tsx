"use client";

import { FileText, Menu } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GithubMark } from "@/components/github-mark";
import { nav, profile } from "@/lib/profile";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[#071018]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 font-heading text-xs font-semibold tracking-[0.18em] text-cyan-200">
            VB
          </span>
          <span className="hidden font-heading text-sm tracking-tight text-zinc-100 sm:block">
            Vijay Baskaran
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-sm text-zinc-400 transition-colors hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.github.href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "text-zinc-300"
            )}
            aria-label={
              profile.github.isPlaceholder
                ? "GitHub (profile URL not listed on resume; opens GitHub)"
                : "GitHub"
            }
          >
            <GithubMark className="size-4" />
          </a>
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}
          >
            <FileText data-icon="inline-start" />
            Resume
          </a>

          <Sheet>
            <SheetTrigger
              nativeButton={false}
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden border-white/15 bg-white/5"
                />
              }
            >
              <Menu />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-white/10 bg-[#0b1620] text-zinc-100"
            >
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
                {nav.map((item) => (
                  <SheetClose
                    key={item.href}
                    nativeButton={false}
                    render={<a href={item.href} />}
                    className="rounded-md px-2 py-3 text-base text-zinc-300 hover:bg-white/5 hover:text-cyan-200"
                  >
                    {item.label}
                  </SheetClose>
                ))}
                <SheetClose
                  nativeButton={false}
                  render={
                    <a
                      href={profile.resumeHref}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                  className="mt-2 rounded-md bg-cyan-300 px-2 py-3 text-center text-base font-medium text-slate-950"
                >
                  View resume
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
