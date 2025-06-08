import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 sm:px-12 lg:px-24 xl:px-32 font-sans bg-gradient-to-b from-gray-900 to-gray-950"
    >
      {/* Section Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Education<span className="text-purple-400"></span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full" />
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          My academic journey and the knowledge I've acquired along the way
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500/20 via-purple-500/50 to-purple-500/20 hidden md:block" />

        {/* Education Items */}
        <div className="space-y-16 md:space-y-24">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:right-1/2 md:translate-x-4 md:mr-4 w-6 h-6 rounded-full bg-purple-500 border-4 border-gray-900 z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </div>

              {/* Date Badge (Mobile) */}
              <div className="md:hidden mb-4 px-4 py-2 bg-gray-800 rounded-lg text-sm text-gray-300 font-medium">
                {edu.date}
              </div>

              {/* Education Card */}
              <div
                className={`w-full md:w-5/12 p-6 rounded-xl backdrop-blur-sm border border-gray-800 bg-gradient-to-br from-gray-800/50 to-gray-900/50 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/20 hover:border-purple-400/30 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Institution Logo */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white/5 border border-gray-700/50 p-1.5">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Education Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {edu.degree}
                        </h3>
                        <h4 className="text-md text-purple-300 font-medium mt-1">
                          {edu.school}
                        </h4>
                      </div>
                      {/* Date Badge (Desktop) */}
                      <span className="hidden md:inline-block px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                        {edu.date}
                      </span>
                    </div>

                    {/* Grade */}
                    <div className="mt-3 flex items-center">
                      <span className="text-sm font-medium text-gray-400 mr-2">
                        Grade:
                      </span>
                      <span className="text-white font-semibold">
                        {edu.grade}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-0.5 w-8 bg-purple-500/50 z-0" />
            </div>
          ))}
        </div>

        {/* Timeline End Decoration */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-4 h-4 rounded-full bg-purple-500 hidden md:block" />
      </div>
    </section>
  );
};

export default Education;
