import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Academic background and professional certifications
          </p>
        </div>

        {/* Education */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Bachelor of Computer Science
                </h3>
                <div className="text-xl text-blue-600 mb-3">
                  Quaid-e-Azam University
                </div>
                <div className="flex flex-wrap gap-4 text-slate-600 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Islamabad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>2022 – 2026</span>
                  </div>
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    8th Semester
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Currently in the final year of my Computer Science degree,
                  gaining comprehensive knowledge in software development, data
                  structures, algorithms, database systems, and artificial
                  intelligence. Actively engaged in practical projects and
                  research work.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Award className="text-blue-600" />
            Professional Certifications
          </h3>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl border-l-4 border-purple-600 hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-purple-600 p-3 rounded-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-slate-800 mb-2">
                  Data Science & Artificial Intelligence
                </h4>
                <div className="text-xl text-purple-600 mb-3">
                  NAVTTC (National Vocational & Technical Training Commission)
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Comprehensive certification program covering machine learning,
                  deep learning, data analysis, Python programming, and AI
                  applications. Gained practical experience in building
                  predictive models, data preprocessing, and implementing various
                  machine learning algorithms.
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Deep Learning",
                    "Python",
                    "Data Analysis",
                    "Feature Selection",
                    "Classification",
                    "Regression",
                    "Clustering",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">2022-2026</div>
            <div className="text-slate-700">Bachelor's Program</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">NAVTTC</div>
            <div className="text-slate-700">Certified Professional</div>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">8th</div>
            <div className="text-slate-700">Current Semester</div>
          </div>
        </div>
      </div>
    </section>
  );
}
