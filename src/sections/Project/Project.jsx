import React from 'react';
import { projects } from '../../project data/data';
import ProjectCard from '../../components/ProjectCard';
import Tilt from 'react-parallax-tilt';
import ScrollAnimation from 'react-animate-on-scroll'

const Project = ({theme, setTheme}) => {
  return (
    <div className='max-w-[90%] mx-auto w-full flex flex-col items-center mt-4 p-8 scale-90' id='project'>
      <ScrollAnimation animateIn="fadeInRight">
        <p className={`text-7xl font-bold tracking-wider ${theme === 'dark' ? 'text-green' : 'text-pink' } mb-8`}>PROJECTS</p>
      </ScrollAnimation>
      <div className='w-full flex flex-col gap-y-24 mt-8'>
        {
          projects.map((project) => (
            <ScrollAnimation animateIn={project.id % 2 === 0 ? "fadeInRight" : "fadeInLeft"}>
              <div key={project.id} className={`w-full flex flex-col justify-center ${project.id % 2 === 0 ? "items-end" : "items-start"}`}>
                <Tilt className={`w-[75%] ${theme === 'dark' ? '' : ''}`}>
                  <ProjectCard project={project} theme={theme} setTheme={setTheme}/>
                </Tilt>
              </div>
            </ScrollAnimation>
          ))
        }
      </div>
    </div>
  );
};

export default Project;
