export function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Dart", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 80 },
        { name: "C++", level: 90 },
        { name: "C", level: 70 },
      ],
      color: "blue",
    },
    {
      category: "Mobile Development",
      skills: [
        { name: "Flutter", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "Cloud Firestore", level: 85 },
      ],
      color: "purple",
    },
    {
      category: "Web Development",
      skills: [
        { name: "React", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "HTML & CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
      ],
      color: "indigo",
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 80 },
        { name: "Firestore", level: 85 },
      ],
      color: "emerald",
    },
    {
      category: "Software Engineering",
      skills: [
        { name: "MVC / MVVM", level: 85 },
        { name: "Clean Architecture", level: 82 },
        { name: "Repository Pattern", level: 80 },
        { name: "REST APIs", level: 85 },
      ],
      color: "amber",
    },
    {
      category: "Data Science & AI",
      skills: [
        { name: "Data Processing", level: 85 },
        { name: "Machine Learning", level: 70 },
        { name: "Data Analysis", level: 80 },
      ],
      color: "cyan",
    },
    {
      category: "Tools",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
      ],
      color: "slate",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-3">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-2.5 rounded-full transition-all duration-1000 bg-gradient-to-r 
                          ${category.color === 'blue' ? 'from-blue-500 to-blue-600' : ''}
                          ${category.color === 'purple' ? 'from-purple-500 to-purple-600' : ''}
                          ${category.color === 'indigo' ? 'from-indigo-500 to-indigo-600' : ''}
                          ${category.color === 'emerald' ? 'from-emerald-500 to-emerald-600' : ''}
                          ${category.color === 'amber' ? 'from-amber-500 to-amber-600' : ''}
                          ${category.color === 'cyan' ? 'from-cyan-500 to-cyan-600' : ''}
                          ${category.color === 'slate' ? 'from-slate-600 to-slate-700' : ''}
                        `}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Team Player", "Problem Solving", "Communication", "Time Management", "Adaptability"].map(
              (skill, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}