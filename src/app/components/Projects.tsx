import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Roadside Assistance Mobile App",
      category: "Mobile Development",
      year: "2024",
      description:
        "Developed a cross-platform roadside assistance mobile app using Flutter (Dart), Firebase, and Cloud Firestore. Implemented real-time service requests, user authentication, and data management for seamless emergency roadside support.",
      technologies: ["Flutter", "Dart", "Firebase", "Cloud Firestore"],
      image:
        "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBncmFkaWVudCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzgwMzA4Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "TripAdvisor Clone",
      category: "Web Development",
      year: "2023 – 2024",
      description:
        "Developed a responsive frontend of the TripAdvisor website using Bootstrap, CSS, and JavaScript, ensuring a seamless user experience. Designed a MySQL database for efficient data storage and retrieval.",
      technologies: ["JavaScript", "Bootstrap", "CSS", "MySQL"],
      image:
        "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHpwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb21wdXRlcnxlbnwxfHx8fDE3ODA0Nzg5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Data Science & Machine Learning Projects",
      category: "Data Science",
      year: "2024",
      description:
        "Developed multiple data science projects covering classification, clustering, regression, feature selection, and fuzzy logic, applying machine learning techniques for data analysis and prediction.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn"],
      image:
        "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzgwNDE2OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Digital Image Processing & Deep Learning",
      category: "AI/ML",
      year: "2024 – 2025",
      description:
        "Completed advanced projects in Digital Image Processing and Deep Learning, focusing on image analysis, model implementation, and neural network architectures.",
      technologies: ["Python", "Deep Learning", "TensorFlow", "OpenCV"],
      image:
        "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzgwNDE2OTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of academic and practical projects demonstrating my
            technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-slate-800">
                    {project.title}
                  </h3>
                  <span className="text-slate-500 text-sm">{project.year}</span>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}