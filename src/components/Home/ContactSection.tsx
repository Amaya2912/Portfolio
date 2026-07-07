import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail, FiPhone, FiExternalLink } from 'react-icons/fi';

export default function ContactSection() {
  const contacts = [
    {
      id: 'email',
      title: 'Email',
      value: 'jhamaya2904@gmail.com',
      actionLabel: 'Send email',
      href: 'mailto:jhamaya2904@gmail.com',
      icon: <FiMail />,
    },
    {
      id: 'phone',
      title: 'Phone / WhatsApp',
      value: '+57 312 3358430',
      actionLabel: "Let's talk",
      href: 'tel:+573123358430',
      icon: <FiPhone />,
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      value: '/in/jhonamaya2912',
      actionLabel: 'Connect',
      href: 'https://www.linkedin.com/in/jhonamaya2912/',
      icon: <FaLinkedin />,
    },
    {
      id: 'github',
      title: 'GitHub',
      value: '@Amaya2912',
      actionLabel: 'View code',
      href: 'https://github.com/Amaya2912',
      icon: <SiGithub />,
    },
  ];

    return (
      <section id="contacto" className="rounded-3xl bg-black p-10 shadow-lg shadow-slate-950/40">
        <h2 className="text-3xl font-semibold text-white">Contact</h2>
        <p className="mt-4 text-slate-300">Have a job opening, a project, or just want to say hi? Choose a channel and let's talk.</p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {contacts.map((c) => (
          <div key={c.id} className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-950/50 p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-xl text-slate-200">
                {c.icon}
              </div>
              <div>
                <div className="text-sm text-slate-400">{c.title}</div>
                <div className="mt-1 text-lg font-medium text-white">{c.value}</div>
              </div>
            </div>

            <a
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-sm text-slate-300 hover:text-white flex items-center gap-2"
            >
              <span>{c.actionLabel}</span>
              <FiExternalLink />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
