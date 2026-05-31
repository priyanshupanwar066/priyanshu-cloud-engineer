import {
  Award,
  BadgeCheck,
  Cloud,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

import SectionHeader from "@/components/SectionHeader";
import { PageMotion, Reveal } from "@/components/Reveal";
import { certificates } from "@/lib/profile";

export const metadata = {
  title: "Certifications",
};

export default function CertificationsPage() {
  const featured = certificates.filter(
    (item) => item.featured
  );

  return (
    <PageMotion>
      <SectionHeader
        eyebrow="Certifications"
        title="Cloud, DevOps, and Infrastructure Certifications"
        description="Industry-recognized certifications covering AWS Cloud, Kubernetes, Docker, Terraform, Networking, Security, and modern DevOps practices."
      />

      {/* Badges */}

      <section className="mt-10">
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200">
            AWS Certified
          </span>

          <span className="rounded-full bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            DevOps
          </span>

          <span className="rounded-full bg-green-300/10 px-4 py-2 text-sm font-medium text-green-200">
            Infrastructure Automation
          </span>
        </div>
      </section>

      {/* Stats */}

      <section className="mt-10 grid gap-4 md:grid-cols-4">
        {[
          {
            value: "12+",
            label: "Certifications",
          },
          {
            value: "AWS",
            label: "Cloud Focus",
          },
          {
            value: "DevOps",
            label: "Automation",
          },
          {
            value: "K8s",
            label: "Container Skills",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="glass rounded-lg p-5 text-center"
          >
            <h3 className="text-3xl font-bold text-cyan-200">
              {item.value}
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              {item.label}
            </p>
          </div>
        ))}
      </section>

      {/* Featured Certifications */}

      <section className="mt-14 grid gap-5 lg:grid-cols-3">
        {featured.map((certificate, index) => (
          <Reveal
            key={certificate.file}
            delay={index * 0.05}
            className="glass focus-ring rounded-lg p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-lg border border-amber-300/40 bg-amber-300/10 text-amber-100">
                <Cloud size={20} />
              </div>

              <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
                Featured
              </span>
            </div>

            <h2 className="mt-5 text-xl font-semibold text-white">
              {certificate.title}
            </h2>

            <p className="mt-3 text-sm text-zinc-400">
              {certificate.issuer}
            </p>

            <p className="mt-2 text-sm text-cyan-200">
              {certificate.date}
            </p>

            {certificate.credential && (
              <p className="mt-3 text-xs text-green-300">
                ✓ Verified Credential
              </p>
            )}

            <a
              href={certificate.file}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
            >
              View Certificate
              <ExternalLink size={15} />
            </a>
          </Reveal>
        ))}
      </section>
            {/* All Certificates */}

      <section className="mt-16">
        <Reveal className="flex items-center gap-3">
          <BadgeCheck
            className="text-green-200"
            size={25}
            aria-hidden="true"
          />

          <h2 className="text-3xl font-semibold text-white">
            Certification Portfolio
          </h2>
        </Reveal>

        <p className="mt-4 max-w-3xl text-zinc-400">
          A collection of certifications covering cloud computing,
          infrastructure automation, containers, networking,
          security, databases, and modern DevOps practices.
        </p>

        {/* Categories */}

        <div className="mt-8 mb-8 flex flex-wrap gap-3">
          {[
            "AWS",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Networking",
            "Security",
            "Data",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-300/30 hover:text-cyan-200"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Certificate Grid */}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate, index) => (
            <Reveal
              key={`${certificate.title}-${certificate.file}`}
              delay={index * 0.025}
              className="glass focus-ring rounded-lg p-5 transition hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4">
                <Award
                  className={
                    certificate.featured
                      ? "text-amber-200"
                      : "text-cyan-200"
                  }
                  size={22}
                />

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    certificate.featured
                      ? "border border-amber-300/30 bg-amber-300/10 text-amber-200"
                      : "border border-white/10 text-zinc-300"
                  }`}
                >
                  {certificate.category}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-7 text-white">
                {certificate.title}
              </h3>

              <p className="mt-3 text-sm text-zinc-400">
                {certificate.issuer}
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                {certificate.date}
              </p>

              {certificate.credential && (
                <p className="mt-3 text-xs text-green-300">
                  ✓ Verified Credential
                </p>
              )}

              <a
                href={certificate.file}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
              >
                Open Certificate
                <ExternalLink size={15} />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
            {/* Learning Path */}

      <section className="mt-16">
        <Reveal className="glass rounded-lg p-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={28}
                  className="text-green-200"
                />

                <h2 className="text-2xl font-semibold text-white">
                  Cloud & DevOps Learning Path
                </h2>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                  AWS
                </span>

                <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs text-green-200">
                  Docker
                </span>

                <span className="rounded-full bg-purple-400/10 px-3 py-1 text-xs text-purple-200">
                  Kubernetes
                </span>

                <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs text-amber-200">
                  Terraform
                </span>

                <span className="rounded-full bg-pink-400/10 px-3 py-1 text-xs text-pink-200">
                  Networking
                </span>
              </div>
            </div>

            <div>
              <p className="leading-8 text-zinc-300">
                This certification portfolio reflects a practical
                learning path across AWS Cloud, Linux, Docker,
                Kubernetes, Terraform, Networking, Security,
                Infrastructure Automation, and DevOps practices.
                Each certification supports hands-on cloud
                engineering skills demonstrated throughout my
                projects, deployments, and infrastructure work.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-white/10 p-4">
                  <h3 className="text-lg font-semibold text-cyan-200">
                    Cloud
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    AWS Infrastructure & Services
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 p-4">
                  <h3 className="text-lg font-semibold text-green-200">
                    DevOps
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Automation & CI/CD Workflows
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 p-4">
                  <h3 className="text-lg font-semibold text-purple-200">
                    Operations
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    Monitoring & Infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </PageMotion>
  );
}