import { Reveal } from "@/components/Reveal";

export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-sm font-semibold uppercase text-cyan-200">{eyebrow}</p>
      <h1 className={`text-balance text-4xl font-semibold text-white sm:text-5xl ${centered ? "" : "accent-line"}`}>
        {title}
      </h1>
      {description ? (
        <p className="mt-8 text-base leading-8 text-zinc-300 sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}
