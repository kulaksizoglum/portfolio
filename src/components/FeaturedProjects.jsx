import React, { useState } from "react";

const projects = [
  {
    title: "StoryTeller",
    description:
      "An AI-powered storytelling web app where users create and continue interactive stories with dynamic choices. Built with React, FastAPI, and OpenAI integration.",
    image: "storyteller_img.png",
    gif: "storyteller_gif.gif",
    link: "https://github.com/kulaksizoglum/storyteller",
  },

  {
    title: "MFlix - Full-Stack Movie Platform",
    description:
      "A full-stack movie management platform with authentication, movie CRUD operations, search, pagination, and comment features. Built with React, Express, MongoDB, and JWT.",
    image: "movie.png",
    gif: "movie_gif.gif",
    link: "https://github.com/kulaksizoglum/MovieFullStack",
  },
  {
    title: "Next Role",
    description:
      "A full-stack job application tracker where users can sign up, log in, manage authenticated routes, and track user-specific job applications with protected CRUD APIs. Built with React, Node.js, Express, MongoDB, Mongoose, JWT authentication, password hashing, and rate limiting.",
    image: "nextrole.png",
    gif: "nextrole_gif.gif",
    link: "https://github.com/kulaksizoglum/next-role",
    liveDemo: "https://next-role-s6w7.onrender.com/",
  },
  {
    title: "Odoo Vet",
    description:
      "A custom Odoo veterinary clinic management module for handling clinic operations, appointments, and patient records. Built Odoo models, views, access controls, and appointment wizard flows using Python and XML.",
    image: "odoo.png",
    gif: "odoo_gif.gif",
    link: "https://github.com/kulaksizoglum/odoo_vet",
  },
];

function FeaturedProjects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="w-full">
      <p className="text-center text-5xl mb-16">Featured Projects</p>

      <div className="flex flex-col gap-24">
        {projects.map((project, index) => {
          const imageLeft = index % 2 === 1;
          const imageSrc =
            hoveredIndex === index && project.gif ? project.gif : project.image;

          return (
            <div key={index} className="grid grid-cols-2 items-center w-full">
              <div
                className={`
                  z-10 rounded-2xl p-8
                  bg-linear-to-br from-card/60 via-card/30 to-background
                  border-t-2 border-t-accent
                  shadow-[0_-8px_30px_rgba(157,102,56,0.35)]
                  hover:shadow-[0_-10px_40px_rgba(157,102,56,0.5)]
                  transition
                  ${imageLeft ? "order-2 -ml-14 text-right" : "order-1 -mr-14"}
                `}
              >
                <h3 className="text-2xl mb-6 leading-tight">{project.title}</h3>

                <p className="text-lg leading-8 mb-8">{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent text-lg border-b border-accent pb-1"
                >
                  View Project
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent text-lg border-b border-accent pb-1 ml-6"
                  >
                    Live Demo
                  </a>
                )}
              </div>

              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  overflow-hidden rounded-2xl
                  border border-accent/40
                  shadow-[0_10px_40px_rgba(157,102,56,0.25)]
                  transition-all duration-300
                  hover:z-20 hover:scale-105
                  ${imageLeft ? "order-1" : "order-2"}
                `}
              >
                <img
                  src={imageSrc}
                  alt={project.title}
                  className="w-full h-auto rounded-2xl block"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedProjects;
