import {
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";

import SectionHeader from "@/components/SectionHeader";
import { PageMotion, Reveal } from "@/components/Reveal";
import {
  education,
  profile,
  projects,
  skillGroups,
} from "@/lib/profile";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <PageMotion>
      <SectionHeader
        eyebrow="Resume"
        title="Cloud Engineer Resume & Professional Snapshot"
        description="Download my resume and explore a concise overview of cloud infrastructure, DevOps projects, certifications, and technical expertise."
      />

      <section className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] items-start">
        {/* Left Card */}

        <Reveal className="glass rounded-lg p-6 sm:p-8 h-fit">
          <div className="flex items-center gap-3 text-cyan-200">
            <UserRound size={24} aria-hidden="true" />
            <p className="font-semibold">{profile.name}</p>
          </div>

          <h2 className="mt-5 text-3xl font-semibold text-white">
            {profile.role}
          </h2>

          <p className="mt-5 leading-8 text-zinc-300">
            AWS Cloud & DevOps Engineer focused on cloud infrastructure,
            containerization, CI/CD automation, Kubernetes orchestration,
            Infrastructure as Code, and scalable cloud-native deployments.
          </p>

          <div className="mt-7 grid gap-3 text-sm text-zinc-300">
            <a
              className="flex items-center gap-3 transition hover:text-cyan-200"
              href={`mailto:${profile.email}`}
            >
              <Mail size={17} />
              {profile.email}
            </a>

            <a
              className="flex items-center gap-3 transition hover:text-cyan-200"
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
            >
              <Phone size={17} />
              {profile.phone}
            </a>

            <a
              className="flex items-center gap-3 transition hover:text-cyan-200"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={17} />
              GitHub
            </a>

            <a
              className="flex items-center gap-3 transition hover:text-cyan-200"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <BriefcaseBusiness size={17} />
              LinkedIn
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 p-4">
              <p className="text-xs uppercase tracking-wider text-cyan-200">
                Certification
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                AWS Certified Cloud Practitioner
              </p>
            </div>

            <div className="rounded-lg border border-white/10 p-4">
              <p className="text-xs uppercase tracking-wider text-cyan-200">
                Focus
              </p>

              <p className="mt-2 text-sm font-semibold text-white">
                Cloud & DevOps Engineering
              </p>
            </div>
          </div>

          <a
            href={profile.resume}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
          >
            <Download size={17} />
            Download Resume
          </a>
        </Reveal>
        {/* Resume Preview */}

        <Reveal
          delay={0.08}
          className="glass rounded-lg p-6 sm:p-8"
        >
          <div className="max-h-212.5 overflow-y-auto rounded-lg border border-white/10 bg-white p-6 text-zinc-950">

            <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 sm:flex-row sm:items-start">

              <div>
                <p className="text-2xl font-bold">
                  {profile.name}
                </p>

                <p className="mt-1 text-sm font-semibold text-zinc-700">
                  {profile.role}
                </p>

                <p className="mt-2 text-xs text-zinc-500">
                  {profile.location}
                </p>
              </div>

              <span className="rounded-lg bg-zinc-950 px-3 py-2 text-xs font-semibold text-white">
                Resume PDF
              </span>

            </div>

            <div className="mt-5 grid gap-5">

              <div>
                <p className="text-sm font-bold text-zinc-950">
                  Professional Summary
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  AWS Cloud & DevOps Engineer focused on cloud infrastructure,
                  containerization, CI/CD automation, Infrastructure as Code,
                  Kubernetes orchestration, monitoring, and scalable
                  cloud-native deployments.
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-zinc-950">
                  Core Skill Groups
                </p>

                <div className="mt-3 grid gap-2 sm:grid-cols-2">

                  {skillGroups
                    .slice(0, 6)
                    .map((group) => (
                      <div
                        key={group.title}
                        className="rounded-lg border border-zinc-200 p-3"
                      >
                        <p className="text-xs font-bold text-zinc-950">
                          {group.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-zinc-600">
                          {group.skills
                            .slice(0, 4)
                            .join(" / ")}
                        </p>
                      </div>
                    ))}

                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-zinc-950">
                  Featured Cloud Projects
                </p>

                <div className="mt-3 grid gap-2">

                  <p className="text-xs leading-5 text-zinc-700">
                    <span className="font-bold text-zinc-950">
                      Fluent AI Cloud Deployment Platform
                    </span>
                    {" "}
                    - Docker, AWS EC2, GitHub Actions, Nginx
                  </p>

                  <p className="text-xs leading-5 text-zinc-700">
                    <span className="font-bold text-zinc-950">
                      AWS Three-Tier Scalable Web Architecture
                    </span>
                    {" "}
                    - VPC, EC2, RDS, Route53
                  </p>

                  <p className="text-xs leading-5 text-zinc-700">
                    <span className="font-bold text-zinc-950">
                      Kubernetes Microservices Deployment
                    </span>
                    {" "}
                    - Kubernetes, Docker, Helm
                  </p>

                  <p className="text-xs leading-5 text-zinc-700">
                    <span className="font-bold text-zinc-950">
                      AWS Infrastructure Provisioning with Terraform
                    </span>
                    {" "}
                    - Terraform, AWS, GitHub Actions
                  </p>

                </div>
              </div>

            </div>

          </div>

          <div className="mt-5 flex flex-wrap gap-3">

            <a
              href={profile.resume}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
            >
              <Download size={17} />
              Download PDF
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:text-cyan-100"
            >
              <ExternalLink size={17} />
              Open PDF
            </a>

          </div>
        </Reveal>

      </section>
            <section className="mt-16 grid gap-5 lg:grid-cols-3">

        {/* Core Cloud Stack */}

        <Reveal className="glass rounded-lg p-6">

          <p className="text-sm font-semibold uppercase text-green-200">
            Core Cloud Stack
          </p>

          <div className="mt-5 flex flex-wrap gap-2">

            {skillGroups
              .flatMap((group) => group.skills)
              .slice(0, 18)
              .map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/10 bg-white/4 px-3 py-2 text-sm text-zinc-200"
                >
                  {skill}
                </span>
              ))}

          </div>

        </Reveal>

        {/* Featured Projects */}

        <Reveal
          delay={0.05}
          className="glass rounded-lg p-6"
        >

          <p className="text-sm font-semibold uppercase text-cyan-200">
            Featured Cloud Projects
          </p>

          <div className="mt-5 grid gap-3">

            <p className="text-sm leading-6 text-zinc-300">
              <span className="font-semibold text-white">
                Fluent AI Cloud Deployment Platform
              </span>
              {" "} - Cloud Deployment
            </p>

            <p className="text-sm leading-6 text-zinc-300">
              <span className="font-semibold text-white">
                AWS Three-Tier Scalable Web Architecture
              </span>
              {" "} - Cloud Architecture
            </p>

            <p className="text-sm leading-6 text-zinc-300">
              <span className="font-semibold text-white">
                Kubernetes Microservices Deployment
              </span>
              {" "} - Container Orchestration
            </p>

            <p className="text-sm leading-6 text-zinc-300">
              <span className="font-semibold text-white">
                AWS Infrastructure Provisioning with Terraform
              </span>
              {" "} - Infrastructure as Code
            </p>

            <p className="text-sm leading-6 text-zinc-300">
              <span className="font-semibold text-white">
                Cloud Monitoring & Observability Stack
              </span>
              {" "} - Monitoring
            </p>

          </div>

        </Reveal>

        {/* Education & Focus */}

        <Reveal
          delay={0.1}
          className="glass rounded-lg p-6"
        >

          <p className="text-sm font-semibold uppercase text-amber-200">
            Education & Focus
          </p>

          <div className="mt-5 grid gap-4">

            <div>
              <p className="font-semibold text-white">
                Master of Computer Applications (MCA)
              </p>

              <p className="text-zinc-400">
                Bennett University, Greater Noida
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">
                Bachelor of Computer Applications (BCA)
              </p>

              <p className="text-zinc-400">
                Maa Shakumbhari University, Saharanpur
              </p>
            </div>

            <div className="border-t border-white/10 pt-4">

              <p className="font-semibold text-cyan-200">
                Current Focus
              </p>

              <ul className="mt-3 space-y-2 text-zinc-300">

                <li>
                  AWS Cloud Infrastructure
                </li>

                <li>
                  DevOps Engineering
                </li>

                <li>
                  Kubernetes & Containers
                </li>

                <li>
                  Infrastructure Automation
                </li>

              </ul>

            </div>

          </div>

        </Reveal>

      </section>
            {/* Recruiter Highlights */}

      <section className="mt-10 mb-20">

        <Reveal className="glass rounded-lg p-6">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-semibold uppercase text-cyan-200">
                Recruiter Snapshot
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-white">
                Key Highlights
              </h2>
            </div>

            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              Cloud & DevOps Engineer
            </span>

          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-lg border border-white/10 bg-white/3 p-5">
              <p className="text-xs uppercase tracking-wider text-cyan-200">
                Certification
              </p>

              <p className="mt-3 font-semibold text-white">
                AWS Certified Cloud Practitioner
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/3 p-5">
              <p className="text-xs uppercase tracking-wider text-cyan-200">
                Projects
              </p>

              <p className="mt-3 font-semibold text-white">
                10+ Cloud & DevOps Projects
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/3 p-5">
              <p className="text-xs uppercase tracking-wider text-cyan-200">
                Core Stack
              </p>

              <p className="mt-3 font-semibold text-white">
                AWS • Docker • Kubernetes • Terraform
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/3 p-5">
              <p className="text-xs uppercase tracking-wider text-cyan-200">
                Focus Area
              </p>

              <p className="mt-3 font-semibold text-white">
                Cloud Infrastructure & DevOps
              </p>
            </div>

          </div>

        </Reveal>

      </section>

    </PageMotion>
  );
}