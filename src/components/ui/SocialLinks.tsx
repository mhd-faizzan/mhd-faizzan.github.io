import { socialLinks } from "@/data/socials";
import type { SocialLink } from "@/types";

export default function SocialLinks() {
  return (
    <>
      {socialLinks.map((link: SocialLink, index: number) => (
        <a
          key={index}
          href={link.href}
          target={link.href.startsWith("mailto") ? "_self" : "_blank"}
          rel="noopener noreferrer"
          className="p-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 group"
          aria-label={link.label}
          dangerouslySetInnerHTML={{ __html: link.icon }}
        />
      ))}
    </>
  );
}
