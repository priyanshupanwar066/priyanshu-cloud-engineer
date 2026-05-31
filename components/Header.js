"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BriefcaseBusiness, Cloud, Code2, Menu, X } from "lucide-react";
import { navItems, profile } from "@/lib/profile";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
            <Cloud size={22} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">Priyanshu Panwar</span>
            <span className="block text-xs text-zinc-400">Cloud + DevOps</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  active ? "bg-white text-black" : "text-zinc-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-zinc-300 transition hover:border-cyan-300/50 hover:text-cyan-200"
            aria-label="GitHub"
          >
            <Code2 size={18} aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-zinc-300 transition hover:border-cyan-300/50 hover:text-cyan-200"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness size={18} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-black/90 px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm transition ${
                    active ? "bg-white text-black" : "text-zinc-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 flex gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm text-zinc-200"
              >
                <Code2 size={16} aria-hidden="true" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm text-zinc-200"
              >
                <BriefcaseBusiness size={16} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
