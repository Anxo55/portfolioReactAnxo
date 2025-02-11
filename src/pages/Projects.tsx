export default function Projects() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center py-8 px-4">
      <div className="flex flex-wrap justify-center gap-5 max-w-6xl">
        <ProjectCard
          title="Camisetas deportivas"
          description="Pagina web desarollada con Html, css y JavaScript. Basada en una pagina de venta de camisetas deportivas de segunda mano"
          codeLink="https://github.com/Anxo55/Camisetas-deportivas"
          pageLink="https://anxo55.github.io/Camisetas-deportivas/"
          imageSrc="/Camisetas.jpg"
        />
        <ProjectCard
          title="Toca piano"
          description="Creada con vite en vanilla, usando html css y JavaScript. Funcionalidad para el efecto de pulsado de la tecla y sonido."
          codeLink="https://github.com/Anxo55/tocarPiano"
          pageLink="https://anxo55.github.io/tocarPiano/"
          imageSrc="/Toca-piano.JPG"
        />
        <ProjectCard
          title="To-do-list"
          description="Diseñada con html css y JavaScipt. Pagina sencilla para la anotacion de tareas pendientess."
          codeLink="https://github.com/Anxo55/Todo-list"
          pageLink="https://anxo55.github.io/Todo-list/"
          imageSrc="/To-do-list.jpg"
        />
        <ProjectCard
          title="Calculadora funcional"
          description="Pagina hecha con html css y JavaScript. Funcionalidad de la calculadora con la devolucion correcta de los resultado"
          codeLink="https://github.com/Anxo55/Calculadora-funcional"
          pageLink="https://anxo55.github.io/Calculadora-funcional/"
          imageSrc="/Calculadora.jpg"
        />
        <ProjectCard
          title="Api Rest Peliculas"
          description="Diseñada con html, css y JavaScript. Accediendo a una api gratutita hacemos el diseño y mostramos las busquedas de peliculas."
          codeLink="https://github.com/Anxo55/Api-rest-de-peliculas"
          pageLink="https://anxo55.github.io/Api-rest-de-peliculas/"
          imageSrc="/Api-peliculas.JPG"
        />
        <ProjectCard
          title="Portfolio"
          description="Portfolio diseñado con Bootstrap. Plantilla con la que utilice los componentes de html y css para el diseño de un portfolio personal."
          codeLink="https://github.com/Anxo55/Portfolio-Personal"
          pageLink="https://anxo55.github.io/Portfolio-Personal/"
          imageSrc="/Portfolio-personal.JPG"
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
  imageSrc: string; // Nueva propiedad para la imagen
}

function ProjectCard({ title, description, codeLink, pageLink, imageSrc }: ProjectCardProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-5">
      <a href={pageLink} target="_blank">
        <img className="rounded-t-lg w-full h-48 object-cover" src={imageSrc} alt={title} />
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
