import { Code2, ExternalLink, Layers3, MonitorCog, Workflow } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { PageMotion, Reveal } from "@/components/Reveal";
import { githubProjects, profile, projects } from "@/lib/profile";
import SkillsMarquee from "@/components/SkillsMarquee";
export const metadata = {
  title: "Projects",
};
const skills = [
  "AWS",
  "EC2",
  "S3",
  "IAM",
  "VPC",
  "Route 53",
  "CloudWatch",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Linux",
  "Ubuntu",
  "Git",
  "GitHub",
  "GitHub Actions",
  "Jenkins",
  "Nginx",
  "Prometheus",
  "Grafana",
  "Loki",
  "MongoDB",
  "MySQL",
  "Node.js",
  "Express.js",
  "Next.js",
  "React",
  "Bash",
  "Networking",
  "CI/CD",
  "DevOps",
  "Cloud Computing",
];
export default function ProjectsPage() {
  return (
    <PageMotion>
      <SectionHeader
        eyebrow="Projects"
        title="Cloud, DevOps, and Infrastructure Engineering Projects"
        description="A collection of cloud, DevOps, and infrastructure projects demonstrating AWS deployments, containerization, CI/CD automation, Infrastructure as Code, monitoring, and cloud operations."
      />

<SkillsMarquee />
      <section className="mt-14 grid gap-5">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05} className="glass focus-ring rounded-lg p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="inline-flex items-center gap-2 rounded-lg border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-sm text-amber-100">
                  <Layers3 size={16} aria-hidden="true" />
                  {project.category}
                </p>
                <h2 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">{project.title}</h2>
              </div>
              <div>
                <p className="leading-8 text-zinc-300">{project.summary}</p>
                <p className="mt-4 leading-8 text-zinc-400">{project.impact}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-lg border border-white/10 bg-white/4 px-3 py-2 text-sm text-zinc-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>


      
      <section className="mt-16">
        <Reveal className="glass rounded-lg p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div className="flex items-center gap-3 text-cyan-200">
              <Workflow size={28} aria-hidden="true" />
              <h2 className="text-2xl font-semibold text-white">Project pattern</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-4">
              {["Code", "Container", "Pipeline", "Cloud"].map((step) => (
                <div key={step} className="rounded-lg border border-white/10 bg-white/4 p-4 text-center text-sm font-semibold text-zinc-200">
                  {step}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </PageMotion>
  );
}
