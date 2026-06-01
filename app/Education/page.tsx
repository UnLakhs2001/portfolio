import Link from "next/link";
import { education } from "../data/data";

const Education = () => {
  return (
    <section className="w-full max-w-5xl space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Education
        </h1>

        <p className="max-w-4xl lg:max-w-5xl text-lg font-light leading-8 text-foreground/80">
          My academic background provided a strong foundation in computer
          science and software development, which I continue to build on through
          practical projects.
        </p>
      </div>

      <div className="space-y-6">
        {education.map((item) => (
          <article
            key={item.school}
            className="space-y-5 rounded-2xl bg-white border border-foreground/10 p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-tight">
                  {item.degree}
                </h2>
                <p className="text-base text-foreground/80">{item.school}</p>
              </div>

              <span className="text-sm text-foreground/60">{item.period}</span>
            </div>

            <p className="text-sm text-foreground/70">GPA: {item.gpa}</p>

            <ul className="space-y-2 text-foreground/80">
              {item.details.map((detail) => (
                <li key={detail} className="leading-7">
                  • {detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-between">
        <Link className="transition hover:opacity-70" href="/Experience">
          ← Experience
        </Link>
        <Link className="transition hover:opacity-70" href="/Contact">
          Contact →
        </Link>
      </div>
    </section>
  );
};

export default Education;
