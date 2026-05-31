import {
  SiDocker,
  SiKubernetes,
  SiNginx,
  SiTerraform,
  SiGithubactions,
  SiJenkins,
  SiGit,
  SiLinux,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

import {
  FaAws,
  FaNetworkWired,
  FaShieldAlt,
  FaTerminal,
} from "react-icons/fa";

export const skills = [
  // Cloud & Infrastructure
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "AWS EC2", icon: FaAws },
{ name: "S3", icon: FaAws },
{ name: "IAM", icon: FaAws },
{ name: "VPC", icon: FaAws },
{ name: "Route 53", icon: FaAws },
{ name: "CloudWatch", icon: FaAws },
    ],
  },

  // Containers
  {
    category: "Containers & Orchestration",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Docker Compose", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Nginx", icon: SiNginx },
    ],
  },

  // IaC
  {
    category: "Infrastructure as Code",
    items: [
      { name: "Terraform", icon: SiTerraform },
      { name: "Bash Scripting", icon: FaTerminal },
    ],
  },

  // CI/CD
  {
    category: "CI/CD & Automation",
    items: [
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Git", icon: SiGit },
      { name: "Linux", icon: SiLinux },
    ],
  },

  // Monitoring
  {
    category: "Monitoring & Observability",
    items: [
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Grafana", icon: SiGrafana },
      { name: "Loki", icon: SiGrafana },
    ],
  },

  // Networking
  {
    category: "Networking & Security",
    items: [
      { name: "TCP/IP", icon: FaNetworkWired },
      { name: "DNS", icon: FaNetworkWired },
      { name: "HTTP/HTTPS", icon: FaNetworkWired },
      { name: "SSH", icon: FaShieldAlt },
      { name: "VPN", icon: FaShieldAlt },
    ],
  },
];