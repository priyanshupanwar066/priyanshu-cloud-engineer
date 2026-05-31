import { Boxes, Cloud, Code2, Database, GitBranch, Network } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { PageMotion, Reveal } from "@/components/Reveal";
import { skillGroups } from "@/lib/profile";

export const metadata = {
  title: "Skills",
};

const iconMap = {
  "Cloud & Infrastructure": Cloud,
  "Containers & Orchestration": Boxes,
  "CI/CD & Automation": GitBranch,
  "Networking & Security": Network,
  Databases: Database,
  "Web Development": Code2,
};

const strengths = [
  { label: "Cloud deployment", value: "Deploying applications using AWS EC2, Docker Compose, Nginx, and MongoDB Atlas." },
  { label: "Pipeline thinking", value: "Building CI/CD pipelines using GitHub Actions and Jenkins for automated testing and deployments." },
  { label: "Infrastructure practice", value: "Infrastructure automation using Terraform, reusable scripts, and Kubernetes configurations." },
  { label: "Operations basics", value: "Monitoring and operations using Linux, CloudWatch, logging, alerting, and access management." },
];

export default function SkillsPage() {
  return (
    <PageMotion>
      <SectionHeader
        eyebrow="Skills"
        title="Cloud & DevOps Technologies for Building and Operating Modern Infrastructure"
        description="Hands-on experience with AWS, Docker, Kubernetes, Terraform, Linux, networking, and CI/CD automation through real-world cloud and DevOps projects."
      />

      <section className="mt-14 grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = iconMap[group.title] || Cloud;
          return (
            <Reveal key={group.title} delay={index * 0.05} className="glass focus-ring rounded-lg p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                <Icon size={23} aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-white">{group.title}</h2>
              <p className="mt-3 min-h-20 leading-7 text-zinc-400">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-lg border border-white/10 bg-white/4 px-3 py-2 text-sm text-zinc-200">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal className="glass rounded-lg p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase text-amber-200">How I position the stack</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Cloud engineer first, full-stack aware.</h2>
          <p className="mt-5 leading-8 text-zinc-300">
            My primary focus is cloud infrastructure and DevOps engineering, supported by a strong understanding of application architecture, APIs, databases, and deployment workflows.
          </p>
        </Reveal>

        <div className="grid gap-4">
          {strengths.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05} className="glass rounded-lg p-5">
              <p className="font-semibold text-white">{item.label}</p>
              <p className="mt-2 leading-7 text-zinc-400">{item.value}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </PageMotion>
  );
}
