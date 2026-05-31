import { BookOpen, GraduationCap, MapPin, Rocket, ServerCog } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { PageMotion, Reveal } from "@/components/Reveal";
import { education, profile } from "@/lib/profile";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PageMotion>
      <SectionHeader
        eyebrow="About"
        title="Building Scalable Cloud Infrastructure and Automated Deployments
"
        description="Focused on designing, deploying, and automating cloud-native solutions using AWS, Docker, Kubernetes, Terraform, Linux, and CI/CD pipelines. Building production-ready cloud infrastructure through hands-on projects, automation workflows, and modern DevOps practices.
"
      />

      <section className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="glass rounded-lg p-6 sm:p-8">
          <div className="flex items-center gap-3 text-cyan-200">
            <ServerCog size={24} aria-hidden="true" />
            <p className="font-semibold">Professional Focus</p>
          </div>
          <h2 className="mt-6 text-3xl font-semibold text-white">AWS Cloud & DevOps Engineer</h2>
          <p className="mt-5 leading-8 text-zinc-300">
            Experienced in AWS infrastructure, Linux administration, containerization, CI/CD automation, Infrastructure as Code, networking, and monitoring. My projects demonstrate end-to-end cloud deployment workflows from development to production environments.
          </p>
          <p className="mt-5 leading-8 text-zinc-300">
            Building production-ready cloud infrastructure and automation workflows using AWS, Docker, Kubernetes, Terraform, Linux, and modern DevOps practices.

          </p>
        </Reveal>

        <Reveal delay={0.08} className="grid gap-4">
          {[
            {
              icon: Rocket,
              title: "Cloud Automation & Delivery",
              text: "Focused on the complete software delivery lifecycle, including source control, build automation, containerization, infrastructure provisioning, application deployment, monitoring, and operational excellence.",
            },
            {
              icon: MapPin,
              title: "Open to Opportunities",
              text: "Based in Greater Noida, India, and actively seeking opportunities in Cloud Engineering, DevOps, Infrastructure Automation, and Cloud Operations.",
            },
            {
              icon: BookOpen,
              title: "Continuous Improvement",
              text: "Expanding expertise through certifications, hands-on labs, cloud projects, and real-world deployment scenarios across AWS and modern DevOps technologies.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass focus-ring rounded-lg p-5">
                <Icon className="text-green-200" size={22} aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
              </div>
            );
          })}
        </Reveal>
      </section>

      <section className="mt-16">
        <Reveal>
          <div className="flex items-center gap-3">
            <GraduationCap className="text-amber-200" size={24} aria-hidden="true" />
            <h2 className="text-3xl font-semibold text-white">Education</h2>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className="glass rounded-lg p-6">
              <p className="text-sm text-cyan-200">{item.period}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-zinc-300">{item.place}</p>
              <p className="mt-4 leading-7 text-zinc-400">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-5 lg:grid-cols-3">
        {[
          "AWS Certified Cloud Practitioner with hands-on AWS, Docker, Kubernetes, Terraform, and CI/CD practice.",
          "Strong fundamentals in Linux, networking, infrastructure automation, and cloud operations workflow.",
          "Full-stack MERN experience helps me understand how applications behave after deployment.",
        ].map((item, index) => (
          <Reveal key={item} delay={index * 0.05} className="rounded-lg border border-white/10 bg-white/4 p-5">
            <p className="leading-7 text-zinc-300">{item}</p>
          </Reveal>
        ))}
      </section>
    </PageMotion>
  );
}
