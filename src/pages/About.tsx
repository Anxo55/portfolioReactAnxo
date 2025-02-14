export default function About() {
  return (
    <div className="bg-gray-900 text-white py-10 px-4 font-serif">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500">
          ¡Hola! Soy Anxo Campos
        </h1>

        <h2 className="text-2xl text-gray-400 mt-2">
          Desarrollador Front-End Junior
        </h2>

        <div className="mt-8 space-y-6 text-left md:max-w-3xl mx-auto">
          {/* Introducción */}
          <div>
            <p className="text-gray-300 text-lg">
              Desde que descubrí el desarrollo web, me apasionó la posibilidad de transformar ideas en soluciones digitales. Mi objetivo es siempre crear experiencias que no solo sean funcionales, sino también atractivas y fáciles de usar.
            </p>
          </div>

          {/* Tecnologías que uso */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-400">
              Tecnologías que uso
            </h3>
            <p className="text-gray-300 text-lg mt-2">
              Trabajo principalmente con tecnologías como <strong>React</strong>, <strong>JavaScript</strong> y <strong>CSS</strong>. Me apasiona seguir aprendiendo nuevas herramientas y frameworks que me permitan enfrentar los retos del desarrollo web de manera innovadora.
            </p>
          </div>

          {/* Enfoque en trabajo en equipo */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-400">
              Mi enfoque de trabajo
            </h3>
            <p className="text-gray-300 text-lg mt-2">
              Me encanta trabajar en equipo, creo que la colaboración es clave para crear soluciones más completas y efectivas. Estoy siempre dispuesto a compartir ideas y aprender de los demás para mejorar en cada proyecto.
            </p>
          </div>

          {/* Metas y crecimiento */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-400">
              Mis metas y crecimiento
            </h3>
            <p className="text-gray-300 text-lg mt-2">
              Mi objetivo es seguir creciendo como desarrollador, mejorar mis habilidades en el diseño de experiencias de usuario y explorar nuevas tecnologías que me permitan crear aplicaciones aún más eficientes e interactivas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
