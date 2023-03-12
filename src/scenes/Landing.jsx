import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
const Landing = ({ setSelectedPage }) => {
  const isAboveSmallScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* image section */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveSmallScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
          before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
          before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
              max-w-[200px] md:max-w-[400px] rounded-t-[400px]"
              alt="profile"
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <img
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
              max-w-[200px] md:max-w-[400px] rounded-t-[400px]"
            alt="profile"
            src="assets/profile-image.png"
          />
        )}
      </div>

      {/* main section */}
      <div className="z-30 basis-3/5 mt-12 md:mt-32">
        {/* head */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Abdurrahman{" "}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20
              xs:before:content-brush before:absolute before:-left-[15px]
              before:-top-[70px] before:z-[-1]"
            >
              Ariyanto
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            A highly motivated and skilled web developer with 3 years of
            experience . Summary: Proficient in programming languages such as
            Javascript, NodeJs, Codeigniter Experience with software development
            methodologies including Agile Excellent problem-solving and
            analytical skills Strong teamwork and collaboration abilities
            Bachelor's degree in Computer Science from Gunadarma University
          </p>
        </motion.div>

        {/* call to action */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
            hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pro-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center 
            justify-center font-playfair px-10"
            >
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
