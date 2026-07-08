import {Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "#sobre-mi", label: "About" },
  { href: "#proyectos", label: "Projects" },
  { href: "#habilidades", label: "Skills" },
  { href: "#contacto", label: "Contact" },
];

export default function AppLayout() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [firstScroll, setFirstScroll] = useState(false);
  const firstScrollCaptured = useRef(false);

  useEffect(() => {
    setPageLoaded(true);

    const handleScroll = () => {
      if (!firstScrollCaptured.current) {
        firstScrollCaptured.current = true;
        setFirstScroll(true);
      }
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    const sections = Array.from(document.querySelectorAll("main section"));
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-700 bg-black py-5 backdrop-blur-xl">
        <div className="flex flex-col items-center justify-between w-full px-6 mx-auto max-w-screen-2xl gap-4 lg:flex-row">
          <div className="flex items-center gap-2 text-white">
            <span className="font-semibold text-lg">&lt;jhon.dev /&gt;</span>
          </div>

          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-slate-200">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            className="rounded-full px-4 py-2 transition duration-200 hover:bg-slate-700 hover:text-white"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className={`p-5 mx-auto mt-10 max-w-5xl ${pageLoaded ? "page-loaded" : "opacity-0"} ${firstScroll ? "page-scrolled" : ""}`}>
        <Outlet />
      </main>

      <footer className="mt-20 border-t border-slate-800/80 bg-black px-6 py-8 text-slate-400 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl border border-slate-800/80 bg-black px-6 py-5 shadow-[0_0_30px_rgba(34,211,238,0.08)] sm:flex-row">
          <p className="text-sm font-medium text-slate-200">
            <span className="text-gray-400">const</span> author = <span className="text-white">"Jhon Amaya"</span>
          </p>
          <p className="text-sm">&copy; 2026 Made with React + Tailwind CSS</p>
        </div>
      </footer>
    </>
  );
}
