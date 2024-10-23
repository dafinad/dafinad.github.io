import React, { useState } from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFileExcel,
  FaPhp,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiAdobephotoshop,
  SiPowerbi,
  SiTailwindcss,
  SiMysql,
  SiMicrosoftexcel,
  SiGooglecolab,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />, // Added key
          <FaCss3 key="css3" />,   // Added key
          <FaJs key="js" />,       // Added key
          <FaReact key="react" />, // Added key
          <FaPhp key="php" />,     // Added key
          <FaWordpress key="wordpress" />, // Added key
          <SiTailwindcss key="tailwind" />, // Added key
          <FaJava key="java" />    // Added key
        ],
      },
      {
        title: 'Data Analyst/ Data Science',
        icons: [
          <FaPython key="python" />, 
          <SiPowerbi key="powerbi" />, 
          <SiGooglecolab key="colab" />, 
          <SiTensorflow key="tensorflow" />, 
          <SiPytorch key="pytorch" />
        ],
      },
      {
        title: 'Database',
        icons: [
          <SiMysql key="mysql" />
        ],
      },
      {
        title: 'Others',
        icons: [
          <SiMicrosoftexcel key="excel" />
        ],
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'MSC Computer Science, University of Newcastle Upon Tyne, UK',
        stage: '2022-2023',
      },
      {
        title: 'B.Comp.Sc (Systems & Networking)(Hons.), UNITEN, Malaysia',
        stage: '2016-2019',
      },
      {
        title: 'Diploma in Computer Science, UNITEN, Malaysia',
        stage: '2014-2016',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Data Management System - Persolkelly',
        stage: 'May 2024 - August 2024',
      },
      {
        title: 'Computing Lecturer - Kolej KTAC',
        stage: 'September 2021 - March 2022',
      },
      {
        title: 'Intern - Aexis Technologies',
        stage: 'February 2016 - May 2016',
      },
    ],
  },
  {
    title: 'certificates',
    info: [
      {
        title: 'IBM Data Science',
        stage: 'May 2024',
      },
      {
        title: 'Elements of AI - University of Helsinki',
        stage: '2024',
      },
    ],
  },
];


import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'>WHO <span className='text-accent'>I AM?</span></motion.h2>

          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            I graduated from University of Newcastle Upon Tyne in 2023 with a Master in Computer Science.
            I am most passionate about giving back to the community, and my goal is to pursue this passion within the field of Data Science.
            <br />
            <br />When I am not programming, I focus on my hobbies which are: diary writing, practicing piano, or exploring the beautiful world.
          </motion.p>
        </div>

        {/* image */}
        <div className='w-[1200px] h-full absolute right-0 bottom-0'>
          {/* bg image */}
          <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[350px]'> 

          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex} // Ensure key is added here
                  className={`${index === itemIndex && 
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
                  after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className='bg-pink-400/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index]?.info ? (
              aboutData[index].info.map((item, itemIndex) => (
                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  <div>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => (
                      <div key={iconIndex} className='text-2xl text-white'>
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div>No data available</div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;