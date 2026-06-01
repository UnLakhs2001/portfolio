import { skillGroups } from "../data/data";

const Skills = () => {
  return (
    <section className="w-full max-w-5xl space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Skills & Tools
        </h1>

        <p className="max-w-5xl text-lg font-light leading-8 text-foreground/80">
          Technologies I use to build full-stack web applications, focusing on
          modern, scalable, and maintainable solutions.
        </p>
      </div>

      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.title} className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">
              {group.title}
            </h2>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-xl border border-foreground/10 bg-white px-4 py-3 text-sm text-foreground shadow-sm"
                  >
                    <Icon className="text-base opacity-80" />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="flex my-10 justify-between">
        <a className="hover:opacity-70 transition" href="./Projects">
          ← Projects
        </a>
        <a className="hover:opacity-70 transition" href="./Experience">
          Experience →
        </a>
      </div>
    </section>
  );
};

export default Skills;
