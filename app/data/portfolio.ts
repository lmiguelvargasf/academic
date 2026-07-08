export type Locale = "en" | "es";

export type Publication = {
  title: string;
  venue: string;
  year: string;
};

export type ResearchLine = {
  title: string;
  description: string;
};

export type Course = {
  code: string;
  title: string;
  institution: string;
};

export type PortfolioContent = {
  nav: {
    about: string;
    research: string;
    publications: string;
    teaching: string;
    contact: string;
  };
  hero: {
    name: string;
    title: string;
    institution: string;
    researchFocus: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
  };
  research: {
    heading: string;
    intro: string;
    lines: ResearchLine[];
  };
  publications: {
    heading: string;
    intro: string;
    items: Publication[];
    viewAll: string;
  };
  teaching: {
    heading: string;
    intro: string;
    courses: Course[];
    note: string;
  };
  contact: {
    heading: string;
    intro: string;
    emailLabel: string;
    links: { label: string; href: string }[];
  };
  footer: string;
  langSwitch: { en: string; es: string };
};

export const portfolio: Record<Locale, PortfolioContent> = {
  en: {
    nav: {
      about: "About",
      research: "Research",
      publications: "Publications",
      teaching: "Teaching",
      contact: "Contact",
    },
    hero: {
      name: "David Malan, PhD",
      title: "Gordon McKay Professor of the Practice of Computer Science",
      institution: "Harvard University",
      researchFocus:
        "Computer science education and cybersecurity — making rigorous computing accessible at scale.",
      tagline:
        "I lead CS50, Harvard’s introduction to computer science, and study how technology can teach more people, more effectively.",
      ctaPrimary: "Explore CS50",
      ctaSecondary: "Download CV",
    },
    about: {
      heading: "About my work",
      paragraphs: [
        "My research spans two realms: security and education, with my most recent work focused on the latter, informed by the former. Within security, I have long been interested in cybersecurity — threats to networks and hosts as well as the defenses against them, from botnet detection to digital forensics.",
        "Today, much of my energy goes toward computer science education at scale. CS50 has grown into one of Harvard’s largest courses and one of the world’s most popular online introductions to programming, with millions of learners on edX, YouTube, and beyond. I explore how pedagogy, open courseware, and emerging tools — including generative AI — can lower barriers while preserving rigor.",
        "Beyond the classroom, I serve on Harvard’s Computer Science Curriculum Committee, as Faculty Director of the DCE Educational Innovation Laboratory, and as operator of the Regent Theatre, a historic performing arts space in Arlington, Massachusetts.",
      ],
    },
    research: {
      heading: "Research & current projects",
      intro:
        "Ongoing lines of work at the intersection of teaching, tools, and trustworthy systems.",
      lines: [
        {
          title: "CS50 & computing education at scale",
          description:
            "Designing and studying introductory computer science for concentrators and non-concentrators alike — on campus, online, and in high schools through CS50 AP. Focus areas include active learning, assessment, academic honesty, and building global learning communities.",
        },
        {
          title: "AI-assisted teaching and learning",
          description:
            "Integrating generative AI into CS50 through tools like CS50.ai — personalized tutoring, rubber-duck debugging, and human-in-the-loop feedback — while studying what actually improves learning outcomes.",
        },
        {
          title: "Educational infrastructure & open tools",
          description:
            "Building standardized, cloud-based programming environments (CS50 IDE, GitHub Codespaces, containerization) so students can start coding on day one, and sharing teaching tools openly with educators worldwide.",
        },
        {
          title: "Cybersecurity education & forensics",
          description:
            "Making security concepts accessible to technical and non-technical audiences through courses like Introduction to Cybersecurity, and drawing on earlier research in botnet detection, collaborative intrusion detection, and digital forensics.",
        },
      ],
    },
    publications: {
      heading: "Selected publications",
      intro:
        "A sample of recent refereed work. See my CV for the full list.",
      items: [
        {
          title:
            "Improving AI in CS50: Leveraging Human Feedback for Better Learning",
          venue: "SIGCSE 2025",
          year: "2025",
        },
        {
          title:
            "Containerizing CS50: Standardizing Students’ Programming Environments",
          venue: "ITiCSE 2024",
          year: "2024",
        },
        {
          title:
            "Teaching CS50 with AI: Leveraging Generative Artificial Intelligence in Computer Science Education",
          venue: "SIGCSE 2024",
          year: "2024",
        },
        {
          title: "Toward an Ungraded CS50",
          venue: "SIGCSE 2021",
          year: "2021",
        },
        {
          title: "Teaching Academic Honesty in CS50",
          venue: "SIGCSE 2020",
          year: "2020",
        },
        {
          title:
            "Going Over the Cliff: MOOC Dropout Behavior at Chapter Transition",
          venue: "Distance Education",
          year: "2020",
        },
      ],
      viewAll: "Full publication list (CV)",
    },
    teaching: {
      heading: "Teaching",
      intro:
        "Courses I teach or have developed across Harvard College, Extension School, Business School, and Law School.",
      courses: [
        {
          code: "CS50",
          title: "Introduction to Computer Science",
          institution: "Harvard College",
        },
        {
          code: "CS50 AI",
          title: "Introduction to Artificial Intelligence with Python",
          institution: "Harvard Extension School",
        },
        {
          code: "E-159",
          title: "Introduction to Cybersecurity",
          institution: "Harvard Extension School",
        },
        {
          code: "CS50 MBA",
          title: "Computer Science for Managers",
          institution: "Harvard Business School",
        },
        {
          code: "CS50 JD",
          title: "Computer Science for Lawyers",
          institution: "Harvard Law School",
        },
        {
          code: "E-1a",
          title: "Understanding Technology",
          institution: "Harvard Extension School",
        },
      ],
      note:
        "CS50 materials are freely available at cs50.harvard.edu, including lectures, problem sets, and online sections.",
    },
    contact: {
      heading: "Contact",
      intro:
        "I welcome notes from students, colleagues, journalists, and potential collaborators.",
      emailLabel: "Email",
      links: [
        { label: "Harvard profile", href: "https://cs.harvard.edu/malan/" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/malan/",
        },
        {
          label: "CV (PDF)",
          href: "https://cs.harvard.edu/malan/cv/malan.pdf",
        },
        { label: "CS50", href: "https://cs50.harvard.edu/" },
      ],
    },
    footer: "© David J. Malan · Harvard University",
    langSwitch: { en: "English", es: "Español" },
  },
  es: {
    nav: {
      about: "Sobre mí",
      research: "Investigación",
      publications: "Publicaciones",
      teaching: "Enseñanza",
      contact: "Contacto",
    },
    hero: {
      name: "David Malan, PhD",
      title:
        "Profesor Gordon McKay de la Práctica de Ciencias de la Computación",
      institution: "Universidad de Harvard",
      researchFocus:
        "Educación en informática y ciberseguridad — hacer la computación rigurosa accesible a gran escala.",
      tagline:
        "Dirijo CS50, la introducción a la informática de Harvard, y estudio cómo la tecnología puede enseñar a más personas, de forma más efectiva.",
      ctaPrimary: "Explorar CS50",
      ctaSecondary: "Descargar CV",
    },
    about: {
      heading: "Sobre mi trabajo",
      paragraphs: [
        "Mi investigación abarca dos ámbitos: la seguridad y la educación, con mi trabajo más reciente centrado en esta última, informado por la primera. En seguridad, me ha interesado durante mucho tiempo la ciberseguridad — amenazas a redes y equipos, así como las defensas contra ellas, desde la detección de botnets hasta la informática forense.",
        "Hoy, gran parte de mi energía se dirige a la educación en informática a gran escala. CS50 se ha convertido en uno de los cursos más grandes de Harvard y en una de las introducciones en línea más populares a la programación, con millones de estudiantes en edX, YouTube y más allá. Exploro cómo la pedagogía, el material abierto y las herramientas emergentes — incluida la IA generativa — pueden reducir barreras sin sacrificar el rigor.",
        "Más allá del aula, formo parte del Comité de Currículo de Informática de Harvard, soy Director de Facultad del Laboratorio de Innovación Educativa de DCE y operador del Regent Theatre, un histórico espacio de artes escénicas en Arlington, Massachusetts.",
      ],
    },
    research: {
      heading: "Investigación y proyectos actuales",
      intro:
        "Líneas de trabajo en la intersección de la enseñanza, las herramientas y los sistemas confiables.",
      lines: [
        {
          title: "CS50 y educación en informática a escala",
          description:
            "Diseño y estudio de la introducción a la informática para concentradores y no concentradores — en el campus, en línea y en escuelas secundarias a través de CS50 AP. Áreas de enfoque: aprendizaje activo, evaluación, honestidad académica y comunidades de aprendizaje globales.",
        },
        {
          title: "Enseñanza y aprendizaje asistidos por IA",
          description:
            "Integración de IA generativa en CS50 mediante herramientas como CS50.ai — tutoría personalizada, depuración asistida y retroalimentación humana — estudiando qué mejora realmente los resultados de aprendizaje.",
        },
        {
          title: "Infraestructura educativa y herramientas abiertas",
          description:
            "Construcción de entornos de programación estandarizados en la nube (CS50 IDE, GitHub Codespaces, contenedores) para que los estudiantes puedan programar desde el primer día, compartiendo herramientas docentes abiertamente con educadores de todo el mundo.",
        },
        {
          title: "Educación en ciberseguridad y forense",
          description:
            "Hacer accesibles los conceptos de seguridad a audiencias técnicas y no técnicas mediante cursos como Introducción a la Ciberseguridad, apoyándome en investigaciones previas sobre detección de botnets, detección colaborativa de intrusiones e informática forense.",
        },
      ],
    },
    publications: {
      heading: "Publicaciones seleccionadas",
      intro:
        "Una muestra de trabajos arbitrados recientes. Consulte mi CV para la lista completa.",
      items: [
        {
          title:
            "Improving AI in CS50: Leveraging Human Feedback for Better Learning",
          venue: "SIGCSE 2025",
          year: "2025",
        },
        {
          title:
            "Containerizing CS50: Standardizing Students’ Programming Environments",
          venue: "ITiCSE 2024",
          year: "2024",
        },
        {
          title:
            "Teaching CS50 with AI: Leveraging Generative Artificial Intelligence in Computer Science Education",
          venue: "SIGCSE 2024",
          year: "2024",
        },
        {
          title: "Toward an Ungraded CS50",
          venue: "SIGCSE 2021",
          year: "2021",
        },
        {
          title: "Teaching Academic Honesty in CS50",
          venue: "SIGCSE 2020",
          year: "2020",
        },
        {
          title:
            "Going Over the Cliff: MOOC Dropout Behavior at Chapter Transition",
          venue: "Distance Education",
          year: "2020",
        },
      ],
      viewAll: "Lista completa de publicaciones (CV)",
    },
    teaching: {
      heading: "Enseñanza",
      intro:
        "Cursos que imparto o he desarrollado en Harvard College, Extension School, Business School y Law School.",
      courses: [
        {
          code: "CS50",
          title: "Introducción a la Ciencia de la Computación",
          institution: "Harvard College",
        },
        {
          code: "CS50 AI",
          title: "Introducción a la Inteligencia Artificial con Python",
          institution: "Harvard Extension School",
        },
        {
          code: "E-159",
          title: "Introducción a la Ciberseguridad",
          institution: "Harvard Extension School",
        },
        {
          code: "CS50 MBA",
          title: "Informática para Directivos",
          institution: "Harvard Business School",
        },
        {
          code: "CS50 JD",
          title: "Informática para Abogados",
          institution: "Harvard Law School",
        },
        {
          code: "E-1a",
          title: "Comprensión de la Tecnología",
          institution: "Harvard Extension School",
        },
      ],
      note:
        "Los materiales de CS50 están disponibles gratuitamente en cs50.harvard.edu, incluyendo conferencias, conjuntos de problemas y secciones en línea.",
    },
    contact: {
      heading: "Contacto",
      intro:
        "Recibo con agrado mensajes de estudiantes, colegas, periodistas y posibles colaboradores.",
      emailLabel: "Correo electrónico",
      links: [
        { label: "Perfil en Harvard", href: "https://cs.harvard.edu/malan/" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/malan/",
        },
        {
          label: "CV (PDF)",
          href: "https://cs.harvard.edu/malan/cv/malan.pdf",
        },
        { label: "CS50", href: "https://cs50.harvard.edu/" },
      ],
    },
    footer: "© David J. Malan · Universidad de Harvard",
    langSwitch: { en: "English", es: "Español" },
  },
};

export const EMAIL = "malan@harvard.edu";
export const CV_URL = "https://cs.harvard.edu/malan/cv/malan.pdf";
export const CS50_URL = "https://cs50.harvard.edu/";
