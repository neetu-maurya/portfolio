import React from 'react'
import ProjectText from './ProjectText'
import SingleProject from './SingleProject'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const project =[{
    name:'Vacation of Africa',
    year:'Mar 2022',
    align:'right',
    image:'../../public/images/website-img-1.jpg',
    link:"#",
}
,
  {
    name: 'Trip to Asia',
    year: 'Dec 2021',
    align: 'left',
    image: '../../public/images/website-img-2.webp',
    link: '#',
  },
  {
    name: 'Beach Holiday in Australia',
    year: 'Aug 2022',
    align: 'right',
    image: '../../public/images/website-img-3.jpg',
    link: '#',
  },
  {
    name: 'Mountain Adventure in Canada',
    year: 'Sep 2023',
    align: 'left',
    image: '../../public/images/website-img-4.jpg',
    link: '#',
  },]

const ProjectMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
      variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
      >
      <ProjectText/>
      </motion.div>
       
       <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12 '>
       {project.map((item,index)=>
    {
        return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link}/>
    })}
       </div>
    </div>
  )
}

export default ProjectMain