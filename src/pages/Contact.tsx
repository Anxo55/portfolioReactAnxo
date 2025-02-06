
const Contact = () => {
  
  return (
    <div className="max-w-md mx-auto p-6  shadow-lg rounded-xl font-serif border border-gray-500 m-16">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Enviar un Correo</h2>
      <form  className="space-y-4 text-white shadow-2xl ">
        <input
          type="text"
          name="title"
          placeholder="Título"
          className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          required
        />
        <textarea
          name="message"
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
      
    </div>
  );
};

export default Contact;
