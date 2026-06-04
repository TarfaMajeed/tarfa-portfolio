import { Code2, Database, Smartphone, Brain } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack development with React, JavaScript, and modern frameworks",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Cross-platform development using Flutter and Firebase",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Expertise in MySQL, MongoDB, and Firestore",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Data Science & AI",
      description: "NAVTTC-certified in machine learning and AI solutions",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Computer Science student in my 8th semester at
            Quaid-e-Azam University, passionate about creating innovative
            solutions through code. With hands-on experience in web development,
            mobile app development, and data science, I bring a versatile skill
            set to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl hover:shadow-xl transition-shadow border border-blue-100"
            >
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">8th</div>
              <div className="text-blue-100">Semester</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">NAVTTC</div>
              <div className="text-blue-100">Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
