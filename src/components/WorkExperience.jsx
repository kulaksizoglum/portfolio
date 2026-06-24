import React from "react";

const experiences = [
  {
    title: "Software Developer",
    company: "Dgtl X Ar-Ge ve Bilişim Hizmetleri A.Ş.",
    location: "Istanbul, Turkey",
    period: "March 2025 – March 2026",
    image: "dgtlx.png",
    bullets: [
      "Contribute to the design, development, and customization of ERP systems tailored to client needs.",
      "Develop custom modules, automate business workflows, manage relational databases, and implement user management, scheduling, and notification features to improve operational efficiency.",
    ],
  },
  {
    title: "Intern Software Developer",
    company: "HEAŞ - Airport Management and Aviation Industries Inc. (SAW)",
    location: "Istanbul, Turkey",
    period: "July 2022 – September 2022",
    image: "heas.jfif",
    bullets: [
      "Developed a web-based dynamic warehouse management system using the ASP.NET MVC architecture.",
    ],
  },
];

function WorkExperience() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-5xl">Work Experience</p>

      <div className="flex flex-col gap-8 w-3/4 mt-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="rounded-2xl p-6 bg-linear-to-br from-card/60 via-card/30 to-background border-t-2 border-t-accent shadow-[0_-8px_30px_rgba(157,102,56,0.35)] hover:shadow-[0_-10px_40px_rgba(157,102,56,0.5)] transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-2xl">{exp.title}</p>
                <p className="text-lg text-accent">{exp.company}</p>
              </div>
              <img src={exp.image} alt={exp.company} className="w-20 h-20 rounded-lg object-contain" />
            </div>
            <p className="text-sm mt-1">{exp.location}</p>
            <p className="text-sm mt-1 opacity-70">{exp.period}</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="text-base leading-7">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
