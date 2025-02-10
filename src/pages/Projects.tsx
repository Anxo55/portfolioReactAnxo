export default function Projects() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center py-8 px-4">
      <div className="flex flex-wrap justify-center gap-5 max-w-6xl">
        <ProjectCard
          title="Camisetas deportivas"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          codeLink="https://github.com/Anxo55/Camisetas-deportivas"
          pageLink="https://anxo55.github.io/Camisetas-deportivas/"
        />
        <ProjectCard
          title="Toca piano"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          codeLink="https://github.com/Anxo55/tocarPiano"
          pageLink="https://anxo55.github.io/tocarPiano/"
        />
        <ProjectCard
          title="To-do-list"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          codeLink="https://github.com/Anxo55/Todo-list"
          pageLink="https://anxo55.github.io/Todo-list/"
        />
        <ProjectCard
          title="Calculadora funcional"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          codeLink="https://github.com/Anxo55/Calculadora-funcional"
          pageLink="https://anxo55.github.io/Calculadora-funcional/"
        />
        <ProjectCard
          title="Notas rápidas"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          codeLink="https://github.com/Anxo55/Notas-rapidas"
          pageLink="https://anxo55.github.io/Notas-rapidas/"
        />
        <ProjectCard
          title="Lista de compras"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          codeLink="https://github.com/Anxo55/Lista-de-compras"
          pageLink="https://anxo55.github.io/Lista-de-compras/"
        />
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  codeLink: string;
  pageLink: string;
}

function ProjectCard({ title, description, codeLink, pageLink }: ProjectCardProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-5">
      <a href={pageLink} target="_blank">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt={title} />
      </a>
      <div className="p-5">
        <a href={pageLink} target="_blank">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <div className="flex gap-3">
          <a
            href={codeLink}
            target="_blank"
            className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-white hover:text-blue-700 border border-blue-700"
          >
            Code
          </a>
          <a
            href={pageLink}
            target="_blank"
            className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-white hover:text-blue-700 border border-blue-700"
          >
            Page
          </a>
        </div>
      </div>
    </div>
  );
}
