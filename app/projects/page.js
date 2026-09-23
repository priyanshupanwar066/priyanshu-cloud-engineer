"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Layers3, Sparkles, Workflow } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { PageMotion, Reveal } from "@/components/Reveal";
import SkillsMarquee from "@/components/SkillsMarquee";
import { projects } from "@/lib/profile";

const filterOptions = [
  "All",
  "AWS",
  "EKS",
  "Kubernetes",
  "Docker",
  "Terraform",
  "GitHub Actions",
  "Jenkins",
  "Argo CD",
  "Linux",
  "Monitoring",
  "CI/CD",
];

function matchesFilter(project, filter) {
  if (filter === "All") {
    return true;
  }

  const target = filter.toLowerCase();
  const categoryMatch = project.category.toLowerCase().includes(target);
  const techMatch = project.stack.some((item) => item.toLowerCase().includes(target));

  if (categoryMatch || techMatch) {
    return true;
  }

  if (filter === "CI/CD") {
    return project.stack.some((item) => ["GitHub Actions", "Jenkins", "Argo CD"].includes(item));
  }

  if (filter === "Monitoring") {
    return project.stack.some((item) => ["Prometheus", "Grafana", "Loki", "CloudWatch"].includes(item));
  }

  return false;
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(
    () => projects.filter((project) => matchesFilter(project, activeFilter)),
    [activeFilter]
  );

  return (
    <PageMotion>
      <SectionHeader
        eyebrow="PROJECTS"
        title="Cloud, DevOps & Infrastructure Engineering Projects"
        description="A collection of cloud-native, DevOps, infrastructure, and AWS projects focused on automation, containerization, CI/CD, scalability, observability, and reliable deployments."
      />

      <SkillsMarquee />

      <section className="mt-8">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "border-cyan-300/60 bg-cyan-300/12 text-cyan-100 shadow-[0_0_0_1px_rgba(57,213,255,0.15)]"
                    : "border-white/10 bg-white/3 text-zinc-300 hover:border-cyan-300/30 hover:text-cyan-100"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-8 grid gap-5">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05} className="glass focus-ring rounded-2xl p-5 sm:p-7">
            <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <p className="inline-flex items-center gap-2 rounded-lg border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.08em] text-amber-100">
                    <Layers3 size={14} aria-hidden="true" />
                    {project.category}
                  </p>

                  {project.featured ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-cyan-100">
                      <Sparkles size={12} aria-hidden="true" />
                      Featured
                    </span>
                  ) : null}
                </div>

                <div className="mt-5 flex items-start gap-3">
                  <span className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl font-semibold text-white sm:text-[2rem] leading-tight">{project.title}</h2>
                </div>
              </div>

              <div>
                <p className="text-base leading-7 text-zinc-300 sm:text-lg">{project.summary}</p>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-200/90">
                    Key implementation / impact
                  </p>
                  <p className="mt-2 leading-7 text-zinc-400">{project.impact}</p>
                </div>

                {project.workflow ? (
                  <div className="mt-5 rounded-xl border border-white/10 bg-black/10 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400">
                      Workflow
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-zinc-200">
                      {project.workflow.map((step, stepIndex) => (
                        <div key={`${project.title}-${step}`} className="flex items-center gap-2">
                          <span className="rounded-full border border-cyan-300/25 bg-cyan-300/8 px-2.5 py-1.5 text-[11px] text-cyan-100">
                            {step}
                          </span>
                          {stepIndex < project.workflow.length - 1 ? (
                            <ArrowRight size={12} className="text-zinc-500" aria-hidden="true" />
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/4 px-2.5 py-2 text-xs font-medium text-zinc-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </PageMotion>
  );
}
