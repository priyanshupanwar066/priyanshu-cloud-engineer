export const profile = {
  name: "Priyanshu Panwar",
  role: "AWS Cloud & DevOps Engineer",
  location: "Greater Noida, Uttar Pradesh, India",
  phone: "+91 7078041562",
  email: "priyanshupanwar841@gmail.com",
  github: "https://github.com/priyanshupanwar066",
  linkedin: "https://www.linkedin.com/in/priyanshu-panwar-5181902b8",
  portfolio: "https://priyanshu-panwar-dev.netlify.app",
  image: "/images/priyanshu-panwar.png",
  resume: "/docs/priyanshu-panwar-resume.pdf",
  current: "MCA 3rd Semester, Bennett University",
  summary:
    "AWS Cloud & DevOps Engineer focused on cloud infrastructure, automation, containers, CI/CD pipelines, and scalable cloud-native deployments.",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/resume", label: "Resume" },
];

export const stats = [
  { value: "AWS", label: "Certified Cloud Practitioner" },
  { value: "12+", label: "Professional Certifications" },
  { value: "10+", label: "Cloud & DevOps Projects" },
  // { value: "3rd", label: "MCA semester" },
];

export const skillGroups = [
  {
    title: "Cloud & Infrastructure",
    description: "Experience with AWS services, infrastructure provisioning, monitoring, identity management, and cloud operations.",
    skills: ["AWS EC2", "S3", "IAM", "VPC", "CloudWatch", "Linux", "Terraform", "Ubuntu", "CentOS"],
  },
  {
    title: "Containers & Orchestration",
    description: "Containerization, orchestration, reverse proxy configuration, and Kubernetes-based application deployments.",
    skills: ["Docker", "Docker Compose", "Kubernetes", "Nginx Reverse Proxy", "CKAD "],
  },
  {
    title: "CI/CD & Automation",
    description: "CI/CD pipeline automation, build validation, deployment workflows, and release management.",
    skills: ["GitHub Actions", "Jenkins", "Git", "GitHub", "Bash Scripting", "Python"],
  },
  {
    title: "Networking & Security",
    description: "Networking fundamentals including DNS, TCP/IP, load balancing, secure access management, and traffic routing.",
    skills: ["TCP/IP", "DNS", "HTTP/HTTPS", "SSH", "VPN", "Load Balancing", "Firewalls", "Subnetting"],
  },
  {
    title: "Databases",
    description: "Relational and NoSQL databases used in cloud-native and web application deployments.",
    skills: ["MongoDB Atlas", "MySQL", "PostgreSQL", "SQL"],
  },
  {
    title: "Web Development",
    description: "Full-stack development experience supporting cloud deployments, APIs, and application architecture.",
    skills: ["JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs", "JWT", "Postman"],
  },
];

export const projects = [
  {
    title: "Fluent AI Cloud Deployment Platform",
    category: "Cloud Deployment",
    summary:
      "Containerized and deployed a complete AI application with Next.js, Node.js, MongoDB Atlas, Docker Compose, AWS EC2, and Nginx reverse proxy.",
    impact:
      "Built automated GitHub Actions workflows for image builds, testing, environment management, and zero-downtime deployment flow.",
    stack: ["Docker", "AWS EC2", "GitHub Actions", "Nginx", "Docker Compose", "MongoDB Atlas"],
  },
  {
    title: "CI/CD Automation Pipeline",
    category: "DevOps Automation",
    summary:
      "Designed a delivery pipeline using Docker, Jenkins, Kubernetes, GitHub Actions, and AWS for automated testing, container builds, and rolling deployments.",
    impact:
      "Added monitoring, alerting, automated rollbacks, and release workflow structure for production-style deployment practice.",
    stack: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "AWS"],
  },
  {
    title: "Terraform-Based Infrastructure Automation",
    category: "Infrastructure as Code",
    summary:
      "Created reusable Terraform modules, Linux scripts, and Kubernetes templates to automate cloud setup and container deployment workflows.",
    impact:
      "Reduced manual infrastructure setup through repeatable provisioning patterns and environment templates.",
    stack: ["Terraform", "Docker", "Kubernetes", "AWS", "Linux Scripting"],
  },
  {
    title: "Cloud-Hosted Full-Stack Application",
    category: "Full-Stack Product",
    summary:
      "Built a full-stack job portal with role-based authentication, JWT login, category filters, responsive UI, and API testing workflows.",
    impact:
      "Deployed frontend and backend across Vercel and Render with MongoDB Atlas as the production database.",
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "Postman"],
  },
  {
    title: "AWS Three-Tier Scalable Web Architecture",
    category: "Cloud Architecture",
    summary:
      "Designed and deployed a highly available three-tier architecture using AWS VPC, EC2, RDS, Application Load Balancer, Auto Scaling Groups, and Route 53.",
    impact:
      "Implemented fault-tolerant infrastructure with private/public subnets, security groups, and automatic scaling based on traffic demand.",
    stack: ["AWS EC2", "RDS", "VPC", "ALB", "Auto Scaling", "Route 53"],
  },
  {
    title: "Kubernetes Microservices Deployment",
    category: "Container Orchestration",
    summary:
      "Containerized multiple microservices and deployed them on Kubernetes using Deployments, Services, ConfigMaps, Secrets, and Ingress Controllers.",
    impact:
      "Enabled scalable, resilient application deployment with automated rolling updates and self-healing capabilities.",
    stack: ["Kubernetes", "Docker", "Helm", "Nginx Ingress", "Linux"],
  },
  {
    title: "Cloud Monitoring & Observability Stack",
    category: "Monitoring & Logging",
    summary:
      "Built a centralized monitoring solution for cloud workloads using Prometheus, Grafana, Node Exporter, and Loki for log aggregation.",
    impact:
      "Created dashboards, alerting rules, and infrastructure health monitoring for proactive incident detection.",
    stack: ["Prometheus", "Grafana", "Loki", "Docker", "Linux"],
  },
  {
    title: "Secure Cloud Backup & Disaster Recovery Solution",
    category: "Cloud Operations",
    summary:
      "Implemented automated backup, snapshot scheduling, and disaster recovery workflows for cloud-hosted applications and databases.",
    impact:
      "Improved data protection and recovery readiness through automated backup policies and recovery testing procedures.",
    stack: ["AWS S3", "AWS Backup", "EBS Snapshots", "Lambda", "CloudWatch"],
  },
];



export const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS Training and Certification",
    date: "Apr 15, 2026 - Apr 15, 2029",
    credential: "83bdbb8e7a5142bf9fd5a94af8a1fe6d",
    file: "/certificates/aws-certified-cloud-practitioner.pdf",
    featured: true,
    category: "AWS Cloud",
  },
  {
    title: "AWS Cloud Practitioner 2023: Deploying & Operating in the AWS Cloud",
    issuer: "AWS / Wingspan",
    date: "Mar 23",
    file: "/certificates/aws-cloud-deploying-operating.pdf",
    featured: true,
    category: "AWS Cloud",
  },
  {
    title: "AWS Cloud Practitioner 2023: Access Management",
    issuer: "AWS / Wingspan",
    date: "Mar 23",
    file: "/certificates/aws-cloud-access-management.pdf",
    featured: true,
    category: "AWS Cloud",
  },
  {
    title: "Official Practice Exam: AWS Certified AI Practitioner",
    issuer: "AWS Training and Certification",
    date: " 2026",
    file: "/certificates/aws-ai-practice-exam.pdf",
    category: "AWS AI",
  },
  {
    title: "Docker for Beginners with Hands-on Labs",
    issuer: "KodeKloud / Coursera",
    date: "Apr 19, 2026",
    file: "/certificates/docker-for-beginners.pdf",
    category: "Containers",
  },
  {
    title: "Certified Kubernetes Application Developer (CKAD): Unit 1",
    issuer: "Pearson / Coursera",
    date: "Apr 19, 2026",
    file: "/certificates/kubernetes-ckad-unit-1.pdf",
    category: "Kubernetes",
  },
  {
    title: "Terraform in AWS from Basics to Guru: Unit 1",
    issuer: "Pearson / Coursera",
    date: "Apr 19, 2026",
    file: "/certificates/terraform-aws-basics-to-guru.pdf",
    category: "Infrastructure as Code",
  },
  {
    title: "Connect and Protect: Networks and Network Security",
    issuer: "Google / Coursera",
    date: "Apr 20, 2026",
    file: "/certificates/connect-protect-network-security.pdf",
    category: "Networking",
  },
  {
    title: "Network Fundamentals",
    issuer: "Infosys Springboard",
    date: "Apr 3, 2026",
    file: "/certificates/network-fundamentals.pdf",
    category: "Networking",
  },
  {
    title: "Complete Ethical Hacking Course with Case Studies",
    issuer: "Infosys Springboard",
    date: "Apr 4, 2026",
    file: "/certificates/ethical-hacking-course.pdf",
    category: "Security",
  },
  {
    title: "SQL for Data Science",
    issuer: "University of California, Davis / Coursera",
    date: "Mar 9, 2026",
    file: "/certificates/sql-for-data-science.pdf",
    category: "Data",
  },

  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google / Coursera",
    date: "Mar 10, 2026",
    file: "/certificates/foundations-data-data-everywhere.pdf",
    category: "Data",
  },
  {
    title: "ETL and Data Pipelines with Shell, Airflow and Kafka",
    issuer: "IBM / Coursera",
    date: "Apr 18, 2026",
    file: "/certificates/etl-data-pipelines.pdf",
    category: "Data Engineering",
  },


];

export const education = [
  {
    title: "Master of Computer Applications (MCA)",
    place: "Bennett University, Greater Noida",
    period: "2025 - 2027",
    detail: "Currently pursuing MCA.",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    place: "Maa Shakumbhari University, Saharanpur",
    period: "2022 - 2025",
    detail: "Graduated with CGPA 6.6 / 10.0.",
  },
  {
    title: "Class XII",
    place: "Spring Bells School, Saharanpur",
    period: "CBSE",
    detail: "Built the academic foundation for computer applications and technical study.",
  },

];
