import { BriefcaseBusiness, Code2, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">{profile.name}</p>
          <p className="mt-3 max-w-2xl leading-7 text-zinc-400">{profile.summary}</p>
        </div>

        <div className="grid gap-3 text-sm text-zinc-300">
          <a className="flex items-center gap-3 transition hover:text-cyan-200" href={`mailto:${profile.email}`}>
            <Mail size={17} aria-hidden="true" />
            {profile.email}
          </a>
          <a className="flex items-center gap-3 transition hover:text-cyan-200" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            <Phone size={17} aria-hidden="true" />
            {profile.phone}
          </a>
          <span className="flex items-center gap-3">
            <MapPin size={17} aria-hidden="true" />
            {profile.location}
          </span>
          <div className="mt-2 flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 transition hover:border-cyan-300/50 hover:text-cyan-200"
              aria-label="GitHub"
            >
              <Code2 size={18} aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 transition hover:border-cyan-300/50 hover:text-cyan-200"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
