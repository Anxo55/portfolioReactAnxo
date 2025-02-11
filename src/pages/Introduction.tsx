import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Introduction() {
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitle((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-800 text-white p-4 font-serif">
      <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-600 shadow-lg md:mr-8">
        <img
          src="/85c2hg4i.png"
          alt="Anxo Campos"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-left md:max-w-md">
        <motion.h1
          className="text-3xl md:text-5xl font-bold"
          animate={{ opacity: showTitle ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          Anxo Campos
        </motion.h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mt-2">
          Desarrollador Front-End Junior
        </h2>
        <p className="text-gray-300 mt-4">
          Adoro el mundo del desarrollo web. Siempre estoy aprendiendo y
          mejorando mis habilidades para crear experiencias increíbles.
        </p>
      </div>
      <div className="flex flex-col items-center mt-6">
        <a
          href="src/download/Anxo_Campos_CV.pdf"
          download="Anxo_Campos_CV.pdf"
          className="bg-blue-600 text-white px-5 py-2 rounded-xl border-2 border-blue-600 transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:scale-105"
        >
          Descargar CV
        </a>

        {/* Iconos de contacto */}
        <ul className="flex items-center space-x-6 mt-6">
          <li>
            <a href="mailto:anxo.campos@gmail.com" className="hover:underline">
              <svg
                className="w-6 h-6 text-gray-300 hover:text-red-500 transition-all"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/Anxo55" className="hover:underline">
              <svg
                className="w-6 h-6 text-gray-300 hover:text-black transition-all"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/anxo-campos-b6878a265/"
              className="hover:underline"
            >
              <svg
                className="w-6 h-6 text-gray-300 hover:text-blue-600 transition-all"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clipRule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>  
    );
}
