export type Language = "en" | "es";

export const links = {
  email: "mailto:malan@harvard.edu",
  cv: "https://cs.harvard.edu/malan/cv/malan.pdf",
  website: "https://cs.harvard.edu/malan/",
  linkedin: "https://www.linkedin.com/in/malan/",
};

export const navTargets = [
  "about",
  "research",
  "publications",
  "teaching",
  "contact",
] as const;

export const copy = {
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

export function resolveLanguage(lang?: string): Language {
  return lang === "es" ? "es" : "en";
}
