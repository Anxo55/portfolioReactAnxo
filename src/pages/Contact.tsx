import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    title: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "TU_SERVICE_ID",
        "TU_TEMPLATE_ID",
        formData,
        "TU_PUBLIC_KEY"
      );
      setIsSent(true);
      setFormData({ title: "", message: "" }); // Reiniciar formulario
      setTimeout(() => setIsSent(false), 3000); // Ocultar mensaje después de 3s
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6  shadow-lg rounded-xl font-serif border border-gray-500 m-16">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Enviar un Correo</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-white shadow-2xl ">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Título"
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Escribe tu mensaje..."
          rows={4}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          required
        />
        <button
          type="submit"
          className="w-full bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-600 hover:text-gray-950 transition cursor-pointer border border-gray-600"
        >
          Enviar
        </button>
      </form>
      {isSent && (
        <p className="mt-4 text-green-500 text-center">
          📩 Correo enviado con éxito!
        </p>
      )}
    </div>
  );
};

export default Contact;
