import { useState, useEffect } from 'react';
import ProjectCard from "./ProjectCard";

const projects = [
  {
    category: "Web",
    title: "Faculty Recruitment Management System (SCPC)",
    description: "Developed a web application for managing the recruitment process of adjunct professors for the School of Systems Engineering at Universidad Industrial de Santander (UIS). Implemented job posting management, applicant registration, resume evaluation, interview scheduling, and recruitment process tracking",
    tags: ["Angular", "Nest.js", "PostgreSQL", "Docker"],
  },
  {
    category: "Web",
    title: "Centauri Library",
    description: "Modular library offering multiple features, including authentication and external API integration, designed for React/Tailwind project showcase app.",
    tags: ["TypeScript", "JavaScript"],
    link: "https://github.com/Daniel-Prada27/Centauri-backend"
    
  },
  {
    category: "Web",
    title: "Coworking hub",
    description: "coworking reservation management system with user authentication and admin panel.",
    tags: ["JavaScript", "Java", "HTML", "CSS", "Docker"],
    link: "https://github.com/JustBeingLuis/CoworkingHub"
  },
  {
    category: "Web",
    title: "Event management system",
    description: "Simple event management system for scheduling, attendee tracking, and easy event administration in a clean React/Tailwind interface.",
    tags: ["TypeScript", "JavaScript", "Java"],
    link: "https://github.com/Amaya2912/Eventos_FullStack"
  },
  {
    category: "Web",
    title: "Synthetic court reservation system",
    description: "Synthetic turf court rental system for booking, availability management, and reservation handling in a streamlined HTML and CSS interface.",
    tags: ["JavaScript", "Java", "HTML", "CSS"],
    link: "https://github.com/Amaya2912/Alquilar_canchas"
  },

  {
    category: "Web",  
    title: "Music Festival",
    description: "A web application for managing music festival events, including artist lineups, ticket sales, and schedule management, built with a focus on user experience and responsive design.",
    tags: ["JavaScript", "SCSS", "HTML"],
    link: "https://github.com/Amaya2912/Festival_de_Musica"
  },
   {
    category: "Web",  
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and experience, designed with a modern aesthetic and responsive layout to highlight professional achievements.",
    tags: ["TypeScript", "JavaScript", "CSS", "HTML"],
    link: "https://github.com/Amaya2912/Portfolio"
  }
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 4);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (showAll) {
      setReveal(false);
      requestAnimationFrame(() => setReveal(true));
    } else {
      setReveal(false);
    }
  }, [showAll]);

  return (
    <section id="proyectos" className="rounded-3xl bg-black p-10 shadow-lg shadow-slate-950/40">
      <h2 className="text-3xl font-semibold text-white">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {visible.map((project, idx) => {
          const isAnimating = showAll; 
          const visibleClass = isAnimating ? (reveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6') : 'opacity-100 translate-y-0';

          return (
            <div
              key={project.title}
              style={{ transitionDelay: `${isAnimating ? idx * 75 : 0}ms` }}
              className={`h-full transform transition-all duration-500 ease-out ${visibleClass}`}
            >
              <ProjectCard {...project} />
            </div>
          );
        })}
      </div>

      {projects.length > 4 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900"
          >
            {showAll ? 'Show less' : `View all (${projects.length - 4} more)`}
          </button>
        </div>
      )}
    </section>
  );
}
