import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { profile } from "@/lib/profile";

export const metadata = {
  metadataBase: new URL(profile.portfolio),
  title: {
    default: `${profile.name} | AWS Cloud & DevOps Engineer`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Professional DevOps and cloud engineering portfolio for Priyanshu Panwar, featuring AWS, Docker, Kubernetes, Terraform, CI/CD, certifications, projects, and resume.",
  openGraph: {
    title: `${profile.name} | AWS Cloud & DevOps Engineer`,
    description:
      "AWS Cloud & DevOps portfolio with cloud projects, certifications, hands-on skills, and resume.",
    type: "website",
    images: [profile.image],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
