import React from 'react'

const ProjectCard = ({project, theme, setTheme}) => {
  return (
    <div className={`relative w-[100%] h-[550px] overflow-hidden rounded-xl
     after:content-[""] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-[#1f1f1f9a]
      before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-custom-gradient before:transform before:scale-x-0 before:origin-left before:transition-all before:duration-[0.4s] before:z-[2]
       hover:before:scale-x-100
      z-[1] group ${theme === 'dark' ? ' shadow-custom-dark-project-card-shadow' : 'shadow-custom-project-card-shadow'}`}>
        <img
        src={project.image}
        alt=''
        className='absolute top-0 left-0 w-full h-full object-cover z-[0] inset-0' />
      
      <div className={`absolute z-[3] flex flex-col p-8 bottom-[20%] gap-[1em] text-white transition-all duration-[0.4s] ${project.id % 2 === 0 ? "right-[10%]" : "left-[10%]"} group-hover:scale-125`}>
          <div className='flex flex-wrap w-[60%] gap-3'>
            {
              project.techStack.map((tech, index) => (
                <div key={index}>
                  <img
                    src={tech}
                    width="50px"
                    alt=''
                  />
                </div>
              ))
            }
          </div>
          <p className=' text-5xl font-bold leading-[3rem]'>{project.title}</p>
          <p className='w-[70%]'>{project.description}</p>
          <button className='bg-pink text-white w-fit py-3 px-9 flex justify-center relative items-center text-lg z-[1] transition-all duration-[0.8s] shadow-custom-shadow
          before:content-[""] before:absolute before:bg-white before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-[-1] before:transform before:scale-x-0 before:origin-left before:transition-all before:duration-[0.8s] hover:before:scale-x-100 group'
          >
            <p className='group-hover:text-black'>Read More</p>
          </button>
        </div>
    </div>
  )
}

export default ProjectCard