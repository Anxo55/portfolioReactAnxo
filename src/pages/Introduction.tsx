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
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-800 text-white p-4">
      <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-600 shadow-lg md:mr-8">
        <img
          src="src/assets/q0l6wjgi.png" // Reemplaza con la ruta de tu imagen
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
          Desarrollador Front-End
        </h2>
        <p className="text-gray-300 mt-4">
          Adoro el mundo del desarrollo web. Siempre estoy aprendiendo y mejorando mis habilidades para crear experiencias increíbles.
        </p>
      </div>
    </div>
  )
}
