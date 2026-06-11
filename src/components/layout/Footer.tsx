import { Mail, MapPin } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import SocialLinks from "@/components/ui/SocialLinks";
import { about } from "@/data/profile";
import { menuItems } from "@/data/navigation";
import InstallPrompt from "@/components/ui/InstallPrompt";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-b from-gray-50 to-white border-t border-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Muhammad Faizan
            </h2>
            <p className="text-gray-600 text-lmd leading-relaxed">
              M.Eng student at Hochschule Harz building ML systems, data pipelines, and applied AI.
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={16} />
              <span className="text-sm">{about.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Mail size={16} />
              <span className="text-sm">{about.email}</span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">Navigation</h3>
            <div>
              {menuItems.map((item) => (
                <ScrollLink
                  to={item.url}
                  key={item.title}
                  className="block text-gray-600 cursor-pointer hover:text-blue-600 transition-colors duration-200 text-md"
                >
                  {item.title}
                </ScrollLink>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">
              Skills & Focus Areas
            </h3>
            <div>
              {about.researchAreas.map((area) => (
                <span key={area} className="block text-gray-600 text-md">
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">
              Connect With Me
            </h3>
            <div className="space-y-3">
              <div className="flex gap-4">
                <SocialLinks />
              </div>
              <InstallPrompt />
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300 to-transparent my-2"></div>
        <div className="flex flex-col lg:flex-row justify-center items-start sm:items-center gap-6">
          <p className="text-gray-400 text-xs mt-1 text-left xl:text-center">
            © {new Date().getFullYear()} Muhammad Faizan
          </p>
        </div>
      </div>
    </footer>
  );
}
