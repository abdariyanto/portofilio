import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Capitalize from "../utils/Capitalize";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};
const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{Capitalize(title)}</p>
        <p className="mt-7">Website Development for {Capitalize(title)}</p>
      </div>
      <img
        src={`../assets/${projectTitle}.jpg`}
        alt={projectTitle}
        className="max-w-[400px]"
      />
    </motion.div>
  );
};
const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* Heading */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-red">PRO</span>JECTS
          </p>
          <LineGradient width="w-1-3" />
          <div className="flex justify-center mt-5"></div>
        </div>
        <p className="mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nostrum
          accusamus sed labore. Quod sunt exercitationem vitae .
        </p>
      </motion.div>

      {/* Project */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEATUFUL USER INTERFACES
          </div>
          <Project title="unilever" />

          <div
            className="flex justify-center text-center items-center p-10 bg-red
            max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
