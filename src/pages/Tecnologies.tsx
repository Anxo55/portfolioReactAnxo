import { motion } from "framer-motion";
import ImageComponent from "../components/ImageComponent";

const tecnologies = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="m-14">
      <motion.h1
        className="font-sans text-white flex justify-center m-4 text-2xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Lenguajes
      </motion.h1>
      <article className="flex flex-wrap justify-center gap-20">
        {[
          { name: "Java", logo: "/svg/java_2ixuzxzt4tn4.svg" },
          { name: "React", logo: "/svg/atom_kjk6zhdu0xk5.svg" },
          { name: "JavaScript", logo: "/svg/java_script_logo_5qpg02qvcaaa.svg" },
          { name: "TypeScript", logo: "/svg/typescript_7qgighctzdrr.svg" },
        ].map((tech, index) => (
          <motion.section
            key={tech.name}
            className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2 }}
          >
            <header className="text-white font-semibold mb-2">{tech.name}</header>
            <ImageComponent src={tech.logo} alt={tech.name} />
          </motion.section>
        ))}
      </article>

      <div className="m-20 p-10">
        <motion.h1
          className="font-sans text-white flex justify-center m-4 text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Tools
        </motion.h1>
        <article className="flex flex-wrap justify-center gap-20">
          {[
            { name: "Git", logo: "/svg/git_o8bu4avxxufj.svg" },
            { name: "GitHub", logo: "/svg/github_logo_94lqwcmbt0ue.svg" },
            { name: "Docker", logo: "/svg/docker_km2056fczh85.svg" },
            { name: "Bootstrap", logo: "/svg/bootstrap_s3ugiwjgbx1f.svg" },
          ].map((tool, index) => (
            <motion.section
              key={tool.name}
              className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.2 }}
            >
              <header className="text-white font-semibold mb-2">{tool.name}</header>
              <ImageComponent src={tool.logo} alt={tool.name} />
            </motion.section>
          ))}
        </article>
      </div>
    </div>
  );
};

export default tecnologies;
