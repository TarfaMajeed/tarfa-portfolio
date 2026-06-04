import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Devzz Tech Solutions",
      location: "Islamabad",
      period: "Jun 2025 – Aug 2025",
      type: "Web Development",
      achievements: [
        "Completed a 3-month Web Development internship, contributing to real-world projects and enhancing coding skills",
        "Collaborated with team members in agile development environments to deliver project tasks effectively",
        "Gained hands-on experience in industry-level web application development, deployment, and best practices",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional experience building real-world applications
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border-l-4 border-blue-600 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <Briefcase size={18} />
                    <span className="text-xl">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm mt-4 md:mt-0">
                  {exp.type}
                </span>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <span className="text-blue-600 mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
          <p className="text-xl">
            Currently seeking opportunities to contribute to innovative projects
            and grow as a developer
          </p>
        </div>
      </div>
    </section>
  );
}
