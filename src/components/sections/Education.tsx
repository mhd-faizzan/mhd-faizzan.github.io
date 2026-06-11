import { GraduationCap, MapPin, Calendar, Star } from "lucide-react";
import { education } from "@/data/profile";

export default function Education() {
  return (
    <section id="education" className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="text-left xl:text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Education
          </h2>
        </div>
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap size={17} className="text-blue-600 shrink-0" />
                    <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                  </div>
                  <p className="text-base font-semibold text-blue-600 pl-6">
                    {edu.university}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5 pl-6">
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <MapPin size={13} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Star size={13} />
                      <span>GPA {edu.gpa}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm pl-6 lg:pl-0 shrink-0">
                  <Calendar size={13} />
                  <span>{edu.period}</span>
                </div>
              </div>
              {edu.courses && edu.courses.length > 0 && (
                <div className="pl-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Major Coursework
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 rounded-full"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
