import Image from "next/image";
import Link from "next/link";
import { Project } from "../data/data";


const statusLabels = {
  live: "Live",
  paused: "Demo paused",
  restricted: "Restricted access",
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      href={`/Projects/${project.id}`}
      className="group overflow-hidden rounded-2xl border border-foreground/10 bg-white transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover transition duration-300"
        />
      </div>

      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-semibold">{project.title}</h2>

          {project.status && (
            <span className="rounded-full border border-foreground/10 px-3 py-1 text-xs text-foreground/70">
              {statusLabels[project.status]}
            </span>
          )}
        </div>

        <p className="text-sm leading-6 text-foreground/80">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-full border border-foreground/10 px-3 py-1 text-xs text-foreground/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ProjectCard;