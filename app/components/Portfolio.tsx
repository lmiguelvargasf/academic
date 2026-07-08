"use client";

import Image from "next/image";
import { useState } from "react";
import {
  CS50_URL,
  CV_URL,
  EMAIL,
  portfolio,
  type Locale,
} from "../data/portfolio";

const navIds = ["about", "research", "publications", "teaching", "contact"] as const;

export default function Portfolio() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = portfolio[locale];

  return (
    <div className="min-h-dvh bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a
            href="#top"
            className="font-serif text-base font-semibold tracking-tight text-stone-900 sm:text-lg"
          >
            D. Malan
          </a>

          <nav
            className="hidden items-center gap-5 text-sm text-stone-600 md:flex"
            aria-label="Primary"
          >
            {navIds.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="transition-colors hover:text-crimson-700"
              >
                {t.nav[id]}
              </a>
            ))}
          </nav>

          <div
            className="flex items-center rounded-full border border-stone-200 bg-white p-0.5 text-xs font-medium shadow-sm"
            role="group"
            aria-label="Language"
          >
            {(["en", "es"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLocale(lang)}
                aria-pressed={locale === lang}
                className={`rounded-full px-3 py-1.5 transition-colors ${
                  locale === lang
                    ? "bg-crimson-700 text-white"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                {t.langSwitch[lang]}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="top">
        <section
          aria-labelledby="hero-name"
          className="relative overflow-hidden border-b border-stone-200"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_-10%,rgba(165,25,49,0.07),transparent_60%)]"
            aria-hidden
          />

          <div className="relative mx-auto grid max-w-5xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
            <div className="motion-hero-content order-2 md:order-1">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-crimson-700">
                {t.hero.institution}
              </p>
              <h1
                id="hero-name"
                className="mt-3 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-stone-900 sm:text-5xl"
              >
                {t.hero.name}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-stone-700 sm:text-xl">
                {t.hero.title}
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-600">
                {t.hero.researchFocus}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-600">
                {t.hero.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={CS50_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-crimson-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-crimson-800"
                >
                  {t.hero.ctaPrimary}
                </a>
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-800 transition-colors hover:border-stone-400 hover:bg-stone-100"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>

            <div className="motion-hero-media order-1 md:order-2">
              <div className="relative mx-auto aspect-[4/3] max-w-md overflow-hidden rounded-lg shadow-[0_20px_50px_-20px_rgba(28,25,23,0.35)] ring-1 ring-stone-200 md:max-w-none">
                <Image
                  src="/malan.jpg"
                  alt="David Malan lecturing"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="border-b border-stone-200"
        >
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-20">
            <h2
              id="about-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-stone-900"
            >
              {t.about.heading}
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-stone-700">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section
          id="research"
          aria-labelledby="research-heading"
          className="border-b border-stone-200 bg-white"
        >
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-20">
            <h2
              id="research-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-stone-900"
            >
              {t.research.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
              {t.research.intro}
            </p>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {t.research.lines.map((line) => (
                <li
                  key={line.title}
                  className="rounded-lg border border-stone-200 bg-stone-50 p-6 transition-shadow hover:shadow-md"
                >
                  <h3 className="font-serif text-lg font-semibold leading-snug text-stone-900">
                    {line.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    {line.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="publications"
          aria-labelledby="publications-heading"
          className="border-b border-stone-200"
        >
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-20">
            <h2
              id="publications-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-stone-900"
            >
              {t.publications.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
              {t.publications.intro}
            </p>
            <ol className="mt-10 divide-y divide-stone-200 border-y border-stone-200">
              {t.publications.items.map((pub) => (
                <li
                  key={pub.title}
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="text-base leading-relaxed text-stone-800">
                    {pub.title}
                  </span>
                  <span className="shrink-0 text-sm text-stone-500">
                    {pub.venue} · {pub.year}
                  </span>
                </li>
              ))}
            </ol>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex text-sm font-medium text-crimson-700 transition-colors hover:text-crimson-800"
            >
              {t.publications.viewAll} →
            </a>
          </div>
        </section>

        <section
          id="teaching"
          aria-labelledby="teaching-heading"
          className="border-b border-stone-200 bg-white"
        >
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-20">
            <h2
              id="teaching-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-stone-900"
            >
              {t.teaching.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
              {t.teaching.intro}
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {t.teaching.courses.map((course) => (
                <li
                  key={course.code + course.institution}
                  className="rounded-lg border border-stone-200 px-5 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-crimson-700">
                    {course.code}
                  </p>
                  <p className="mt-1 font-medium text-stone-900">{course.title}</p>
                  <p className="mt-1 text-sm text-stone-500">
                    {course.institution}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-stone-600">
              {t.teaching.note}
            </p>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-20">
            <h2
              id="contact-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-stone-900"
            >
              {t.contact.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
              {t.contact.intro}
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-medium text-stone-500">
                  {t.contact.emailLabel}
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-1 inline-block text-lg font-medium text-crimson-700 transition-colors hover:text-crimson-800"
                >
                  {EMAIL}
                </a>
              </div>
              <ul className="flex flex-wrap gap-3">
                {t.contact.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-stone-100">
        <div className="mx-auto max-w-5xl px-5 py-8 text-center text-sm text-stone-500 sm:px-8">
          {t.footer}
        </div>
      </footer>
    </div>
  );
}
