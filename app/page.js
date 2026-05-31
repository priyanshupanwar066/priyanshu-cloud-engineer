import Link from "next/link";
import { ArrowRight, BadgeCheck, CloudCog, Download, Mail, ShieldCheck, TerminalSquare } from "lucide-react";
import { PageMotion, Reveal } from "@/components/Reveal";
import { profile, projects, skillGroups, stats } from "@/lib/profile";
import { skills } from "./data/skills";
export default function HomePage() {
  return (
    <PageMotion>
      <section className="grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-sm font-medium text-cyan-100">
              <BadgeCheck size={16} aria-hidden="true" />
              AWS Certified Cloud Practitioner
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-balance text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 text-2xl font-medium text-cyan-100 sm:text-3xl">{profile.role}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Turning ideas into reliable, secure, and production-ready cloud solutions with AWS and DevOps.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
              >
                View Projects
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a
                href={profile.resume}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:text-cyan-100"
              >
                <Download size={17} aria-hidden="true" />
                Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-green-300/50 hover:text-green-100"
              >
                <Mail size={17} aria-hidden="true" />
                Contact
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="glass rounded-lg p-4">
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-5 text-zinc-400">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="relative">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute" />
            <img
              src={profile.image}
              alt="Priyanshu Panwar"
              className="mx-auto block h-auto max-h-165 w-full object-contain"
            />
          </div>
          <div className="mt-[-10] grid gap-3 sm:grid-cols-3">
            {[
              { icon: CloudCog, label: "AWS", text: "EC2, IAM, VPC, S3" },
              { icon: TerminalSquare, label: "Automation", text: "CI/CD and scripting" },
              { icon: ShieldCheck, label: "Security", text: "Networks and access" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="glass rounded-lg p-4">
                  <Icon className="text-cyan-200" size={20} aria-hidden="true" />
                  <p className="mt-3 font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-sm text-zinc-400">{item.text}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="py-16">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-green-200">Projects</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Production-Ready Cloud Engineering Projects</h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
            Explore all projects
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05} className="glass focus-ring rounded-lg p-5">
              <p className="text-sm text-amber-200">{project.category}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{project.summary}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className=" overflow-hidden">
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-semibold uppercase tracking-widest">
            Skills & Technologies
          </p>

          <h2 className="mt-1 text-4xl font-bold text-white">
            Cloud & DevOps Expertise
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-5 w-max">
            {[...skills.flatMap((g) => g.items), ...skills.flatMap((g) => g.items)].map(
              (skill, index) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={index}
                    className="glass flex items-center gap-3 rounded-xl px-6 py-4 border border-white/10 min-w-[220px]"
                  >
                    <Icon size={28} className="text-cyan-400" />

                    <span className="text-white font-medium">
                      {skill.name}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
      <section className="py-12">
        <Reveal className="glass rounded-lg p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-200">Core stack</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Cloud, containers, automation, and full-stack delivery.</h2>
              <p className="mt-5 leading-7 text-zinc-300">
                Hands-on experience building cloud infrastructure, containerized applications, CI/CD pipelines, and automation workflows using modern AWS and DevOps technologies.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {skillGroups.slice(0, 4).map((group) => (
                <div key={group.title} className="rounded-lg border border-white/10 bg-white/3 p-4">
                  <p className="font-semibold text-white">{group.title}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{group.skills.slice(0, 5).join(" / ")}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </PageMotion>
  );
}
