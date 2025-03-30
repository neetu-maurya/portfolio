import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const Experience = [
  {
    job: "Front-End Developer",
    company: "Alex Apps",
    date: "2022 - Present",
    responsibilities: [
      "translating UI/UX design into code",
      "testing usability, collaborating with back-end teams",
      "ensuring seamless user experiences with HTML",
      "CSS, and JavaScript.",
    ],
  },
  {
    job: "Software Engineer",
    company: "TechWave Solutions",
    date: "2020 - 2022",
    responsibilities: [
      "developed and maintained scalable web applications",
      "collaborated with cross-functional teams to define and implement features",
      "optimized application performance using React and Redux",
      "ensured code quality through unit testing and code reviews",
    ],
  },
  {
    job: "Junior Web Developer",
    company: "NextGen Innovations",
    date: "2018 - 2020",
    responsibilities: [
      "assisted in designing and developing responsive websites",
      "implemented interactive user interfaces using HTML, CSS, and JavaScript",
      "performed debugging and troubleshooting to resolve technical issues",
      "supported the team in integrating APIs and third-party services",
    ],
  },
];

const ExperienceAll = () => {
  return (
  <div className="flex md:flex-row sm:flex-col items-center">
    {Experience.map((experience,index)=>
    {
        return <>
        <SingleExperience key={index} experience={experience} />;
        {index <2?(
          <motion.div
          variants={fadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0 }}
          
          >
            <FaArrowRight className="text-6xl text-orange lg:block sm:hidden"/>
            </motion.div>
          ):(
          
          
        ""
    )}
        </>
         
    })}
  </div>
  )
};

export default ExperienceAll;
