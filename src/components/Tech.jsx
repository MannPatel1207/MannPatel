import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, MyTechnologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";


const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {/* Render BallCanvas tech icons */}
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      </div>
  
      <div className='flex flex-col items-center gap-10'>
      {/* First Row: First 3 technologies */}
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {MyTechnologies.slice(0, 3).map((technology, index) => (
          <motion.div
            key={technology.name}
            className='w-44 min-h-[112px] p-4 bg-black-200 rounded-2xl flex flex-col items-start justify-start'
          >
            <h4 className='text-white text-[16px] font-semibold mb-2'>
              <span className='blue-text-gradient'>{technology.name}</span>
            </h4>
            <ul className='list-disc list-inside space-y-1 text-secondary text-[14px]'>
              {technology.content.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Second Row: Remaining 2 technologies */}
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {MyTechnologies.slice(3).map((technology, index) => (
          <motion.div
            key={technology.name}
            className='w-104 min-h-[112px] p-4 bg-black-200 rounded-2xl flex flex-col items-start justify-start'
          >
            <h4 className='text-white text-[16px] font-semibold mb-2'>
              <span className='blue-text-gradient'>{technology.name}</span>
            </h4>
            <ul className='list-disc list-inside space-y-1 text-secondary text-[14px]'>
              {technology.content.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}
  

export default SectionWrapper(Tech, "");
