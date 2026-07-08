"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type Language = "en" | "es";

const links = {
  email: "mailto:malan@harvard.edu",
  cv: "https://cs.harvard.edu/malan/cv/malan.pdf",
  website: "https://cs.harvard.edu/malan/",
  linkedin: "https://www.linkedin.com/in/malan/",
};

const copy = {
  en: {
    switchLabel: "Switch site language to Spanish",
    languageToggle: {
      label: "Language",
      english: "English",
      spanish: "Español",
    },
    skip: "Skip to main content",
    nav: ["About", "Research", "Publications", "Teaching", "Contact"],
    hero: {
      eyebrow: "Harvard University · Computer Science",
      title: "David Malan, PhD",
      role:
        "Gordon McKay Professor of the Practice of Computer Science, Harvard University",
      focus:
        "Computer science education, AI-supported learning, cybersecurity, and digital forensics.",
      summary:
        "I teach and study how people learn computer science at scale—on campus and online—through CS50, open courseware, tools for feedback, and secure computing environments.",
      primary: "Email David",
      secondary: "View CV",
      photoAlt:
        "David Malan speaking in a lecture hall, wearing a black shirt and gesturing while presenting.",
      photoCredit: "Photo: Leroy Zhang / CS50",
      profileAlt:
        "David Malan in a burgundy CS50 hoodie, photographed for his public LinkedIn profile.",
      profileCredit: "Profile photo: LinkedIn",
    },
    proof: [
      { value: "2007–present", label: "Professor at Harvard" },
      { value: "7M+", label: "CS50 registrants on edX" },
      { value: "2.2M", label: "OpenCourseWare YouTube subscribers" },
    ],
    about: {
      label: "About my work",
      heading: "Making rigorous computer science more accessible.",
      body:
        "My work sits at the intersection of teaching, tooling, and systems. Through CS50 and its adaptations, I design learning experiences for students with many backgrounds, study how feedback and course structure affect persistence, and build software that helps large teaching teams support learners personally. Earlier research in cybersecurity, digital forensics, botnets, and sensor networks continues to inform how I teach security, privacy, and dependable computing.",
    },
    research: {
      label: "Research lines and current projects",
      heading: "Questions I return to",
      intro:
        "These themes are synthesized from my public CV and profile and should be updated as projects evolve.",
      items: [
        {
          title: "Computer science education at scale",
          body:
            "Designing CS50, CS50x, CS50 AP, and professional adaptations so large, diverse audiences can learn fundamentals without lowering expectations.",
        },
        {
          title: "AI-supported teaching and feedback",
          body:
            "Exploring CS50.ai, rubber-duck debugging, human feedback loops, and generative AI as personal tutoring support for students and staff.",
        },
        {
          title: "Learning environments and courseware",
          body:
            "Standardizing development environments with cloud tools, containers, autograders, and open-source systems that make feedback faster and more reliable.",
        },
        {
          title: "Cybersecurity and digital forensics",
          body:
            "Studying threats to hosts and networks, digital evidence, secure execution, sensor networks, and collaborative detection of botnets and malware.",
        },
      ],
    },
    publications: {
      label: "Selected publications",
      heading: "Recent and representative writing",
      intro:
        "A fuller publication list is available in the CV; this selection highlights education, AI, course infrastructure, and security.",
      cta: "Open full CV",
      items: [
        {
          title: "Improving AI in CS50: Leveraging Human Feedback for Better Learning",
          meta: "ACM SIGCSE Technical Symposium, 2025",
        },
        {
          title: "Containerizing CS50: Standardizing Students’ Programming Environments",
          meta: "ACM ITiCSE, 2024",
        },
        {
          title:
            "Teaching CS50 with AI: Leveraging Generative Artificial Intelligence in Computer Science Education",
          meta: "ACM SIGCSE Technical Symposium, 2024",
        },
        {
          title:
            "Computer Science with Theatricality: Creating Memorable Moments in CS50 with the American Repertory Theater during COVID-19",
          meta: "ACM SIGCSE Technical Symposium, 2023",
        },
        {
          title: "Toward an Ungraded CS50",
          meta: "ACM SIGCSE Technical Symposium, 2021",
        },
        {
          title: "CS50 Sandbox: Secure Execution of Untrusted Code",
          meta: "ACM SIGCSE Technical Symposium, 2013",
        },
        {
          title: "Implementing Public-Key Infrastructure for Sensor Networks",
          meta: "ACM Transactions on Sensor Networks, 2008",
        },
      ],
    },
    teaching: {
      label: "Teaching",
      heading: "Courses and learning communities",
      intro:
        "I teach introductory and applied computer science across Harvard College, Harvard Extension School, Harvard Summer School, HarvardX, and professional programs.",
      items: [
        {
          title: "CS50: Introduction to Computer Science",
          body:
            "Harvard’s introduction to the intellectual enterprises of computer science and the art of programming.",
        },
        {
          title: "CS50 for JDs and CS50 for Business",
          body:
            "Adaptations for law, management, and professional audiences who need to reason about technology decisions.",
        },
        {
          title: "Introduction to Cybersecurity",
          body:
            "A course for technical and non-technical students on securing accounts, data, systems, and software.",
        },
        {
          title: "CS50P, CS50 SQL, CS50R, and CS50 AI",
          body:
            "Open online courses in Python, databases, R, and artificial intelligence for learners worldwide.",
        },
      ],
    },
    contact: {
      label: "Contact",
      heading: "For students, colleagues, journalists, and collaborators",
      body:
        "Email is the best first step for academic questions, media requests, speaking invitations, and collaboration ideas.",
      emailLabel: "Email",
      website: "Personal website",
      linkedin: "LinkedIn",
      cv: "Curriculum vitae",
      action: "Write to malan@harvard.edu",
    },
    footer:
      "Content synthesized from public CV, website, and profile materials. Replace or refine project details as priorities change.",
  },
  es: {
    switchLabel: "Cambiar el idioma del sitio a inglés",
    languageToggle: {
      label: "Idioma",
      english: "Inglés",
      spanish: "Español",
    },
    skip: "Saltar al contenido principal",
    nav: ["Acerca de", "Investigación", "Publicaciones", "Docencia", "Contacto"],
    hero: {
      eyebrow: "Universidad de Harvard · Informática",
      title: "David Malan, PhD",
      role:
        "Gordon McKay Professor of the Practice of Computer Science, Universidad de Harvard",
      focus:
        "Educación en informática, aprendizaje apoyado por IA, ciberseguridad y análisis forense digital.",
      summary:
        "Enseño e investigo cómo las personas aprenden informática a gran escala —en el campus y en línea— mediante CS50, materiales abiertos, herramientas de retroalimentación y entornos de cómputo seguros.",
      primary: "Escribir a David",
      secondary: "Ver CV",
      photoAlt:
        "David Malan hablando en un auditorio, con camisa negra y gesticulando mientras presenta.",
      photoCredit: "Foto: Leroy Zhang / CS50",
      profileAlt:
        "David Malan con una sudadera burdeos de CS50, fotografiado para su perfil público de LinkedIn.",
      profileCredit: "Foto de perfil: LinkedIn",
    },
    proof: [
      { value: "2007–presente", label: "Profesor en Harvard" },
      { value: "7M+", label: "Personas registradas en CS50 en edX" },
      { value: "2.2M", label: "Suscriptores de OpenCourseWare en YouTube" },
    ],
    about: {
      label: "Acerca de mi trabajo",
      heading: "Hacer que la informática rigurosa sea más accesible.",
      body:
        "Mi trabajo se ubica en la intersección de la enseñanza, las herramientas y los sistemas. A través de CS50 y sus adaptaciones, diseño experiencias de aprendizaje para estudiantes con trayectorias diversas, estudio cómo la retroalimentación y la estructura del curso influyen en la persistencia, y construyo software que ayuda a grandes equipos docentes a apoyar a cada estudiante de manera más personal. Mi investigación previa en ciberseguridad, análisis forense digital, botnets y redes de sensores sigue informando cómo enseño seguridad, privacidad y cómputo confiable.",
    },
    research: {
      label: "Líneas de investigación y proyectos actuales",
      heading: "Preguntas a las que vuelvo",
      intro:
        "Estos temas están sintetizados a partir de mi CV y perfil públicos, y conviene actualizarlos a medida que evolucionen los proyectos.",
      items: [
        {
          title: "Educación en informática a escala",
          body:
            "Diseño de CS50, CS50x, CS50 AP y adaptaciones profesionales para que audiencias amplias y diversas aprendan fundamentos sin reducir las expectativas.",
        },
        {
          title: "Enseñanza y retroalimentación apoyadas por IA",
          body:
            "Exploración de CS50.ai, depuración con pato de goma, ciclos de retroalimentación humana e IA generativa como apoyo de tutoría personal para estudiantes y docentes.",
        },
        {
          title: "Entornos de aprendizaje y courseware",
          body:
            "Estandarización de entornos de desarrollo con herramientas en la nube, contenedores, autocalificadores y sistemas abiertos que hacen la retroalimentación más rápida y confiable.",
        },
        {
          title: "Ciberseguridad y análisis forense digital",
          body:
            "Estudio de amenazas a hosts y redes, evidencia digital, ejecución segura, redes de sensores y detección colaborativa de botnets y malware.",
        },
      ],
    },
    publications: {
      label: "Publicaciones seleccionadas",
      heading: "Escritura reciente y representativa",
      intro:
        "La lista completa de publicaciones está en el CV; esta selección destaca educación, IA, infraestructura de cursos y seguridad.",
      cta: "Abrir CV completo",
      items: [
        {
          title: "Improving AI in CS50: Leveraging Human Feedback for Better Learning",
          meta: "Simposio Técnico ACM SIGCSE, 2025",
        },
        {
          title: "Containerizing CS50: Standardizing Students’ Programming Environments",
          meta: "ACM ITiCSE, 2024",
        },
        {
          title:
            "Teaching CS50 with AI: Leveraging Generative Artificial Intelligence in Computer Science Education",
          meta: "Simposio Técnico ACM SIGCSE, 2024",
        },
        {
          title:
            "Computer Science with Theatricality: Creating Memorable Moments in CS50 with the American Repertory Theater during COVID-19",
          meta: "Simposio Técnico ACM SIGCSE, 2023",
        },
        {
          title: "Toward an Ungraded CS50",
          meta: "Simposio Técnico ACM SIGCSE, 2021",
        },
        {
          title: "CS50 Sandbox: Secure Execution of Untrusted Code",
          meta: "Simposio Técnico ACM SIGCSE, 2013",
        },
        {
          title: "Implementing Public-Key Infrastructure for Sensor Networks",
          meta: "ACM Transactions on Sensor Networks, 2008",
        },
      ],
    },
    teaching: {
      label: "Docencia",
      heading: "Cursos y comunidades de aprendizaje",
      intro:
        "Enseño informática introductoria y aplicada en Harvard College, Harvard Extension School, Harvard Summer School, HarvardX y programas profesionales.",
      items: [
        {
          title: "CS50: Introduction to Computer Science",
          body:
            "La introducción de Harvard a las empresas intelectuales de la informática y al arte de programar.",
        },
        {
          title: "CS50 for JDs y CS50 for Business",
          body:
            "Adaptaciones para derecho, administración y audiencias profesionales que necesitan razonar sobre decisiones tecnológicas.",
        },
        {
          title: "Introduction to Cybersecurity",
          body:
            "Un curso para estudiantes técnicos y no técnicos sobre cómo proteger cuentas, datos, sistemas y software.",
        },
        {
          title: "CS50P, CS50 SQL, CS50R y CS50 AI",
          body:
            "Cursos abiertos en línea sobre Python, bases de datos, R e inteligencia artificial para estudiantes de todo el mundo.",
        },
      ],
    },
    contact: {
      label: "Contacto",
      heading: "Para estudiantes, colegas, periodistas y colaboradores",
      body:
        "El correo electrónico es el mejor primer paso para preguntas académicas, solicitudes de prensa, invitaciones a charlas e ideas de colaboración.",
      emailLabel: "Correo",
      website: "Sitio personal",
      linkedin: "LinkedIn",
      cv: "Curriculum vitae",
      action: "Escribir a malan@harvard.edu",
    },
    footer:
      "Contenido sintetizado a partir del CV, sitio web y materiales de perfil públicos. Reemplace o ajuste los detalles de proyectos cuando cambien las prioridades.",
  },
} as const;

const navTargets = ["about", "research", "publications", "teaching", "contact"];

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-dvh bg-[#f7f2ea] text-stone-950">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-stone-950 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        {t.skip}
      </a>

      <header className="sticky top-0 z-40 border-b border-stone-900/10 bg-[#f7f2ea]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a
            href="#main"
            className="font-syne text-base font-semibold tracking-tight text-stone-950"
          >
            David Malan
          </a>
          <nav
            aria-label={language === "en" ? "Primary navigation" : "Navegación principal"}
            className="hidden items-center gap-6 text-sm text-stone-700 lg:flex"
          >
            {t.nav.map((item, index) => (
              <a
                key={item}
                href={`#${navTargets[index]}`}
                className="transition hover:text-[#8c1d18]"
              >
                {item}
              </a>
            ))}
          </nav>
          <div
            role="group"
            aria-label={t.switchLabel}
            className="flex items-center gap-2 rounded-full border border-stone-900/15 bg-white/75 p-1 shadow-sm"
          >
            <span className="hidden pl-3 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500 sm:inline">
              {t.languageToggle.label}
            </span>
            <button
              type="button"
              aria-pressed={language === "en"}
              onClick={() => setLanguage("en")}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                language === "en"
                  ? "bg-[#8c1d18] text-white shadow-sm"
                  : "text-stone-700 hover:bg-stone-100 hover:text-stone-950"
              }`}
            >
              <span aria-hidden className="mr-1">
                🇺🇸
              </span>
              {t.languageToggle.english}
            </button>
            <button
              type="button"
              aria-pressed={language === "es"}
              onClick={() => setLanguage("es")}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                language === "es"
                  ? "bg-[#8c1d18] text-white shadow-sm"
                  : "text-stone-700 hover:bg-stone-100 hover:text-stone-950"
              }`}
            >
              <span aria-hidden className="mr-1">
                🇪🇸
              </span>
              {t.languageToggle.spanish}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="relative isolate overflow-hidden border-b border-stone-900/10">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_16%,rgba(140,29,24,0.14),transparent_28%),radial-gradient(circle_at_82%_0%,rgba(38,70,83,0.14),transparent_26%)]"
            aria-hidden
          />
          <div className="mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div className="motion-hero-content max-w-3xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#8c1d18]">
                {t.hero.eyebrow}
              </p>
              <h1 className="font-syne text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-stone-950 sm:text-7xl lg:text-8xl">
                {t.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-stone-800 sm:text-2xl">
                {t.hero.role}
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">
                {t.hero.summary}
              </p>
              <p className="mt-6 max-w-2xl border-l-2 border-[#8c1d18] pl-5 text-base font-medium leading-7 text-stone-800">
                {t.hero.focus}
              </p>
              <div className="motion-hero-cta mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={links.email}
                  className="inline-flex items-center justify-center rounded-full bg-[#8c1d18] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8c1d18]/20 transition hover:-translate-y-0.5 hover:bg-[#731712]"
                >
                  {t.hero.primary}
                </a>
                <a
                  href={links.cv}
                  className="inline-flex items-center justify-center rounded-full border border-stone-900/20 bg-white/70 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5 hover:border-stone-900/30"
                >
                  {t.hero.secondary}
                </a>
              </div>
            </div>

            <div className="motion-hero-media">
              <figure className="relative ml-auto max-w-xl pb-16 sm:pb-20">
                <div className="absolute -bottom-8 -left-8 h-44 w-44 rounded-full bg-[#8c1d18]/12 blur-3xl" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-200 shadow-2xl shadow-stone-900/20 ring-1 ring-stone-900/10">
                  <Image
                    src="/david-malan.jpg"
                    alt={t.hero.photoAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-36 overflow-hidden rounded-3xl bg-stone-200 shadow-2xl shadow-stone-900/20 ring-4 ring-[#f7f2ea] sm:w-44">
                  <div className="relative aspect-square">
                    <Image
                      src="/david-malan-linkedin.jpg"
                      alt={t.hero.profileAlt}
                      fill
                      sizes="176px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <figcaption className="mt-3 text-right text-xs leading-5 text-stone-500">
                  {t.hero.photoCredit}
                  <br />
                  {t.hero.profileCredit}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section
          aria-label={language === "en" ? "Academic profile highlights" : "Datos destacados del perfil académico"}
          className="border-b border-stone-900/10 bg-white/40"
        >
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-8 md:grid-cols-3">
            {t.proof.map((item) => (
              <div
                key={item.label}
                className="border-l border-stone-900/20 pl-5"
              >
                <p className="font-syne text-3xl font-semibold tracking-tight text-stone-950">
                  {item.value}
                </p>
                <p className="mt-1 text-sm leading-6 text-stone-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <SectionShell id="about" label={t.about.label} heading={t.about.heading}>
          <p className="max-w-4xl text-xl leading-9 text-stone-700">
            {t.about.body}
          </p>
        </SectionShell>

        <SectionShell
          id="research"
          label={t.research.label}
          heading={t.research.heading}
          intro={t.research.intro}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {t.research.items.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-[1.6rem] border border-stone-900/10 bg-white/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8c1d18]/30 hover:bg-white"
              >
                <p className="mb-8 font-syne text-sm font-semibold text-[#8c1d18]">
                  0{index + 1}
                </p>
                <h3 className="font-syne text-2xl font-semibold tracking-tight text-stone-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-stone-700">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="publications"
          label={t.publications.label}
          heading={t.publications.heading}
          intro={t.publications.intro}
        >
          <div className="divide-y divide-stone-900/10 border-y border-stone-900/10">
            {t.publications.items.map((item) => (
              <article
                key={item.title}
                className="grid gap-3 py-5 transition hover:bg-white/45 sm:grid-cols-[1fr_15rem] sm:px-4"
              >
                <h3 className="text-lg font-semibold leading-7 text-stone-950">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-stone-600 sm:text-right">
                  {item.meta}
                </p>
              </article>
            ))}
          </div>
          <a
            href={links.cv}
            className="mt-8 inline-flex rounded-full border border-stone-900/20 bg-white/70 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5 hover:border-[#8c1d18]/40 hover:text-[#8c1d18]"
          >
            {t.publications.cta}
          </a>
        </SectionShell>

        <SectionShell
          id="teaching"
          label={t.teaching.label}
          heading={t.teaching.heading}
          intro={t.teaching.intro}
        >
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {t.teaching.items.map((item) => (
              <article key={item.title} className="border-t border-stone-900/20 pt-5">
                <h3 className="font-syne text-2xl font-semibold tracking-tight text-stone-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-stone-700">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </SectionShell>

        <section
          id="contact"
          className="bg-stone-950 px-5 py-20 text-white sm:px-8 lg:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f2b8a2]">
                {t.contact.label}
              </p>
              <h2 className="mt-4 font-syne text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                {t.contact.heading}
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-stone-300">
                {t.contact.body}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={links.email}
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:-translate-y-0.5"
                >
                  {t.contact.action}
                </a>
                <a
                  href={links.website}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/45"
                >
                  {t.contact.website}
                </a>
                <a
                  href={links.linkedin}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/45"
                >
                  {t.contact.linkedin}
                </a>
                <a
                  href={links.cv}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/45"
                >
                  {t.contact.cv}
                </a>
              </div>
              <dl className="mt-8 grid gap-3 text-sm text-stone-300 sm:grid-cols-2">
                <div>
                  <dt className="font-semibold text-white">{t.contact.emailLabel}</dt>
                  <dd className="mt-1">
                    <a href={links.email} className="hover:text-[#f2b8a2]">
                      malan@harvard.edu
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">{t.contact.cv}</dt>
                  <dd className="mt-1">
                    <a href={links.cv} className="hover:text-[#f2b8a2]">
                      cs.harvard.edu/malan/cv
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-950 px-5 pb-8 text-sm text-stone-500 sm:px-8">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-6">
          {t.footer}
        </div>
      </footer>
    </div>
  );
}

function SectionShell({
  id,
  label,
  heading,
  intro,
  children,
}: {
  id: string;
  label: string;
  heading: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.36fr_0.64fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8c1d18]">
            {label}
          </p>
          <h2 className="mt-4 font-syne text-4xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-5xl">
            {heading}
          </h2>
          {intro ? (
            <p className="mt-5 max-w-md text-base leading-7 text-stone-600">
              {intro}
            </p>
          ) : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
