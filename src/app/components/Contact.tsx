import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "tarfamajeed01@gmail.com",
      href: "mailto:tarfamajeed01@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+92 321 6969358",
      href: "tel:+923216969358",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "tarfa-majeed-a72098319",
      href: "https://linkedin.com/in/tarfa-majeed-a72098319",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "TarfaMajeed",
      href: "https://github.com/TarfaMajeed",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-8" />
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </div>

        {/* Contact Information Only */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Contact Information
          </h3>
          
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div key={index}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all group"
                  >
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-blue-300 text-sm mb-1">
                        {item.label}
                      </div>
                      <div className="text-white text-lg">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                    <div className="text-blue-400 mt-1">{item.icon}</div>
                    <div>
                      <div className="text-blue-300 text-sm mb-1">
                        {item.label}
                      </div>
                      <div className="text-white text-lg">{item.value}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/20 text-center text-blue-200">
          <p className="mb-4">
            © 2026 Tarfa Majeed. All rights reserved.
          </p>
          <p className="text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}