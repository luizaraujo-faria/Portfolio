import images from "../../assets/images";


interface PortfolioCardProps {
  title: string;
  description: string;
  github: string;
  icon?: string;
  technologies: string[];
}

const ProjectCard = ({
  title,
  description,
  github,
  icon,
  technologies,
}: PortfolioCardProps) => {
  return (
    <div
      className="
      group
      relative
      w-full
      h-65
      rounded-2xl
      border border-white/10
      bg-[#0f0f10]
      p-8
      gap-10
      flex
      flex-col
      justify-center
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-primary/40
      hover:shadow-[0_0_40px_rgba(34,197,94,.08)]
    "
    >
      {/* Github */}
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="
          absolute
          right-8
          top-8
          flex
          size-10
          items-center
          justify-center
          rounded-lg
          border
          border-white/10
          bg-white/5
          text-zinc-400
          transition
          hover:text-white
          hover:border-primary/40
        "
      >
        <img src={images.Github} alt="GitHub" className="size-3/4" />
      </a>

      {/* Ícone */}
      <div
        className="
        flex
        items-center
        justify-center
        size-10
        rounded-lg
        bg-primary/15
        text-primary
      "
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      </div>

      <div className="flex flex-col gap-3">
        {/* Conteúdo */}
        <h3 className="text-2xl font-bold text-white">{title}</h3>

        <p className="max-w-xl text-base leading-relaxed text-zinc-400">
          {description}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
              rounded-lg
              border
              border-primary/30
              bg-primary/10
              px-5
              py-1
              text-sm
              font-medium
              uppercase
              tracking-wide
              text-primary
            "
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;