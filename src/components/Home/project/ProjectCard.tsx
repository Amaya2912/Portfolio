interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({ category, title, description, tags, link }: ProjectCardProps) {
  return (
    <article className="group h-full flex flex-col justify-between rounded-3xl border border-slate-700 bg-slate-950/80 p-8 transition hover:-translate-y-1 hover:border-white">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{category}</p>
        <h3 className="mt-4 text-2xl font-bold text-white">{title}</h3>

        <div className="mt-3 flex-1">
          <p className="text-slate-300">{description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-slate-400 transition group-hover:text-white">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-slate-800 px-3 py-1 text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="mt-6 inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-300 transition hover:border-white hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.287-.01-1.047-.015-2.055-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.81 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.305-.535-1.53.115-3.19 0 0 1.005-.322 3.3 1.23a11.516 11.516 0 013.005-.405c1.02.005 2.045.138 3.005.405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.66.244 2.885.12 3.19.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.096.81 2.21 0 1.595-.015 2.875-.015 3.265 0 .32.215.7.825.58C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <p className="text-sm leading-5">View on GitHub</p>
        </a>
      ) : null}

    </article>
  );
}
