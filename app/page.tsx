import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  copy,
  links,
  navTargets,
  resolveLanguage,
  type Language,
} from "@/lib/portfolio-copy";

type PageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const language = resolveLanguage(params.lang);
  const t = copy[language];

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="${language}";`,
        }}
      />
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
              aria-label={
                language === "en" ? "Primary navigation" : "Navegación principal"
              }
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
            <LanguageToggle language={language} t={t} />
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
                <figure className="relative ml-auto max-w-xl">
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
                  <figcaption className="mt-3 text-right text-xs leading-5 text-stone-500">
                    {t.hero.photoCredit}
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>

          <section
            aria-label={
              language === "en"
                ? "Academic profile highlights"
                : "Datos destacados del perfil académico"
            }
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
                <article
                  key={item.title}
                  className="border-t border-stone-900/20 pt-5"
                >
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
                    <dt className="font-semibold text-white">
                      {t.contact.emailLabel}
                    </dt>
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
    </>
  );
}

function LanguageToggle({
  language,
  t,
}: {
  language: Language;
  t: (typeof copy)[Language];
}) {
  const activeClass =
    "rounded-full bg-[#8c1d18] px-3 py-2 text-sm font-semibold text-white shadow-sm";
  const inactiveClass =
    "rounded-full px-3 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-100 hover:text-stone-950";

  return (
    <nav
      aria-label={t.switchLabel}
      className="flex items-center gap-2 rounded-full border border-stone-900/15 bg-white/75 p-1 shadow-sm"
    >
      <span className="hidden pl-3 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500 sm:inline">
        {t.languageToggle.label}
      </span>
      <Link
        href="/?lang=en"
        scroll={false}
        aria-current={language === "en" ? "page" : undefined}
        className={language === "en" ? activeClass : inactiveClass}
      >
        <span aria-hidden className="mr-1">
          🇺🇸
        </span>
        {t.languageToggle.english}
      </Link>
      <Link
        href="/?lang=es"
        scroll={false}
        aria-current={language === "es" ? "page" : undefined}
        className={language === "es" ? activeClass : inactiveClass}
      >
        <span aria-hidden className="mr-1">
          🇪🇸
        </span>
        {t.languageToggle.spanish}
      </Link>
    </nav>
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
