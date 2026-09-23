"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Check, GitBranch, ShieldCheck, TerminalSquare, Workflow } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const workflowSteps = [
  { label: "Developer", name: "Code & commit" },
  { label: "Git", name: "Version control" },
  { label: "GitHub Actions", name: "Automated workflows" },
  { label: "Docker", name: "Containerization" },
  { label: "Deployment", name: "Release & monitor" },
];

export default function Experience({ experience }) {
  return (
    <section id="experience" className="mt-14">
      <Reveal className="glass rounded-[28px] p-5 sm:p-7 lg:p-8">
        <div className="grid gap-7 lg:grid-cols-[1.55fr_0.95fr] lg:items-start">
          <div>
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                <BriefcaseBusiness size={22} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white sm:text-[2rem]">{experience.role}</h2>
                <p className="mt-2 text-lg text-cyan-200">{experience.company}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
              <span>{experience.location}</span>
              <span className="text-zinc-600">•</span>
              <span>{experience.period}</span>
            </div>

            <div className="my-6 h-px w-full bg-white/10" />

            <div className="flex flex-wrap gap-2">
              {experience.tech.map((item) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs font-medium tracking-wide text-zinc-200"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <ol className="mt-8 space-y-5">
              {experience.points.map((point, index) => (
                <li key={point} className="grid grid-cols-[auto_1fr] gap-4">
                  <div className="mt-1 grid h-8 w-8 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-[10px] font-semibold text-cyan-100">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-base leading-7 text-zinc-300">{point}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
            <div className="flex items-center gap-3 text-cyan-200">
              <Workflow size={18} aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Workflow</span>
            </div>

            <div className="relative mt-6 pl-5">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-300/60 via-cyan-300/20 to-transparent" />
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.35, ease: "easeOut" }}
                  className="relative mb-4 last:mb-0 pl-7"
                >
                  <span className="absolute left-0 top-[6px] h-3.5 w-3.5 rounded-full border border-cyan-300/70 bg-cyan-300/25 shadow-[0_0_16px_rgba(57,213,255,0.55)]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">{step.label}</p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">{step.name}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/3 p-4">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Check className="text-cyan-200" size={16} aria-hidden="true" />
                <span className="font-medium">Completed</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Supported CI/CD automation, Docker-based deployments, SonarQube-driven code quality improvements, and collaborative troubleshooting across development workflows.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
