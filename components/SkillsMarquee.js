"use client";

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

export default function SkillsMarquee() {
  return (
    <div className="relative overflow-hidden py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="mx-3 rounded-full border border-cyan-500/20 bg-white/5 px-5 py-2 text-sm font-medium text-cyan-100 backdrop-blur-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}