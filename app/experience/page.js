import SectionHeader from "@/components/SectionHeader";
import Experience from "@/components/Experience";
import { PageMotion } from "@/components/Reveal";
import { experiences } from "@/lib/profile";

export const metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <PageMotion>
      <SectionHeader
        eyebrow="Experience"
        title="Hands-on experience building, automating, and deploying cloud-native applications."
      />

      <div className="mt-12">
        {experiences.map((experience) => (
          <Experience key={experience.company} experience={experience} />
        ))}
      </div>
    </PageMotion>
  );
}
