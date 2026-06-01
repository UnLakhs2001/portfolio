import Link from "next/link";
import { experiences } from "../data/data";



const Experience = () => {
  return (
    <section className="w-full max-w-5xl space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Experience
        </h1>

        <p className="max-w-4xl lg:max-w-5xl text-lg font-light leading-8 text-foreground/80">
          My experience so far includes internship work and real-world project
          development, where I focused on building and maintaining web
          applications using modern frontend and backend technologies.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <article
            key={`${experience.role}-${experience.company}`}
            className="space-y-5 rounded-2xl border bg-white border-foreground/10 p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-tight">
                  {experience.role}
                </h2>
                <p className="text-base text-foreground/80">
                  {experience.company}
                </p>
              </div>

              <span className="text-sm text-foreground/60">
                {experience.period}
              </span>
            </div>

            <p className="leading-7 text-foreground/80">
              {experience.description}
            </p>

            <ul className="space-y-2 text-foreground/80">
              {experience.points.map((point) => (
                <li key={point} className="leading-7">
                  • {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {experience.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-foreground/10 px-3 py-1 text-sm text-foreground/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="my-10 flex justify-between">
        <Link className="transition hover:opacity-70" href="/Skills">
          ← Skills & Tools
        </Link>
        <Link className="transition hover:opacity-70" href="/Education">
          Education →
        </Link>
      </div>
    </section>
  );
};

export default Experience;