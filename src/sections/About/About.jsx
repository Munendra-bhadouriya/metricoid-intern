import React from 'react'
import HeroImage from '../../assets/HeroImage.png'
import HeroBg from '../../assets/HeroBg.png'
import Cpp from '../../assets/stack/c.svg'
import Html from '../../assets/html-icon.svg'
import CSS from '../../assets/css-icon.svg'
import JavaScript from '../../assets/js-icon.svg'
import ReactIcon from '../../assets/react-icon.svg'
import ReduxIcon from '../../assets/stack/Redux.svg'
import TailwindIcon from '../../assets/stack/tailwind-css-2.svg'
import ExpressIcon from '../../assets/stack/Express.png'
import MongoDBIcon from '../../assets/stack/MongoDB.svg'
import MySQLIcon from '../../assets/stack/mysql-logo-pure.svg'
import NodeIcon from '../../assets/stack/NodeJs.svg'
import GitIcon from '../../assets/stack/Git.svg'
import GithubIcon from '../../assets/stack//Github.svg'
import WindowsIcon from '../../assets/stack/microsoft-windows-22.svg'
import NPMIcon from '../../assets/stack/npm.svg'
import VSIcon from '../../assets/stack/visual-studio-code-1.svg'
import ScrollAnimation from 'react-animate-on-scroll'

const About = ({theme}) => {
  return (
    <div className='relative max-w-[90%] mx-auto w-[2400px] p-8 flex justify-between items-start mt-40 scale-95 scroll-mt-24' id='about'>
      
      <div className='w-[50%] relative flex flex-col gap-y-8' >
        <div className='relative flex flex-col gap-y-7'>
          <ScrollAnimation animateIn="fadeInLeft">
            <p className={`${theme === 'dark' ? 'text-green' : 'text-pink'} text-5xl font-extrabold tracking-wide`}>About Me & My Skills</p>
          </ScrollAnimation>
          
          <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
            <p className={`font-medium tracking-wide text-xl ${theme === 'dark' ? 'text-[#ffffff]' : 'text-black'}`}>
              Hi there! I'm Munendra, a website developer with a passion for creating custom online experiences for my clients. With a skill set including HTML, CSS, JavaScript, and React, I have the tools to bring any website vision to life.
            </p>
          </ScrollAnimation>
        </div>

        <div className='w-full relative flex flex-col gap-y-8'>
          <div className='w-full relative flex flex-col gap-y-4'>
            
            <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
              <p className={`${theme === 'dark' ? 'text-[#9180b5]' : 'text-[#6848AE]'} w-full text-xl font-bold tracking-wide`}>Languages</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" delay={0.7*1000}>
              <div className='w-full flex flex-wrap gap-x-5 items-center'>
                <img src={Cpp} alt='' width='55px' className='cursor-pointer transform hover:scale-125 transition-all duration-500'/>
                <img src={Html} alt='' width='55px' className='cursor-pointer transform hover:scale-125 transition-all duration-500'/>
                <img src={CSS} alt='' width='55px' className='cursor-pointer transform hover:scale-125 transition-all duration-500'/>
                <img src={JavaScript} alt='' width='55px' className='cursor-pointer transform hover:scale-125 transition-all duration-500'/>
              </div>
            </ScrollAnimation>

          </div>

          <div className='w-full relative flex flex-col gap-y-4'>
            
            <ScrollAnimation animateIn="fadeInLeft" delay={0.8*1000}>
              <p className={`${theme === 'dark' ? 'text-[#9180b5]' : 'text-[#6848AE]'} w-full text-xl font-bold tracking-wide`}>Frameworks, Libraries and Enviroments</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" delay={1.1 * 1000}>
              <div className='w-full flex flex-wrap gap-x-5 items-center'>
                <img src={ReactIcon} alt='' width='55px' className='cursor-pointer transform hover:scale-125 transition-all duration-500'/>
                <img src={ReduxIcon} alt='' width='55px' className='cursor-pointer transform hover:scale-125 transition-all duration-500'/>
                <img src={TailwindIcon} alt='' width='55px' className='cursor-pointer transform hover:scale-125 transition-all duration-500'/>
                <img src={ExpressIcon} alt='' width='55px' className='cursor-pointer transform hover:scale-125 transition-all duration-500' />
                <img src={NodeIcon} alt='' width='55px' className='cursor-pointer transform hover:scale-125 transition-all duration-500'/>
              </div>
            </ScrollAnimation>
            
          </div>

          <div className='w-full relative flex flex-col gap-y-4'>
            <ScrollAnimation animateIn='fadeInLeft' delay={1.2*1000}>
              <p className={`${theme === 'dark' ? 'text-[#9180b5]' : 'text-[#6848AE]'} w-full text-xl font-bold tracking-wide`}>Databases, Tools and Systems</p>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInUp' delay={1.5 * 1000}>
              <div className='w-full flex flex-wrap gap-x-5 items-center'>
                <img src={MongoDBIcon} alt='' width='55px' className='cursor-pointer transform hover:scale-125 transition-all duration-500'/>
                <img src={MySQLIcon} alt='' width='55px' className='cursor-pointer transform hover:scale-125 transition-all duration-500'/>
                <img src={GitIcon} alt='' width='55px' className='cursor-pointer transform hover:scale-125 transition-all duration-500'/>
                <img src={GithubIcon} alt='' width='55px' className='cursor-pointer transform hover:scale-125 transition-all duration-500' />
                <img src={NPMIcon} alt='' width='55px' className='cursor-pointer transform hover:scale-125 transition-all duration-500' />
                <img src={VSIcon} alt='' width='55px' className='cursor-pointer transform hover:scale-125 transition-all duration-500'/>
                <img src={WindowsIcon} alt='' width='55px' className='cursor-pointer transform hover:scale-125 transition-all duration-500' />
              </div>
            </ScrollAnimation>
          </div>

        </div>
      </div>

      <div className=' relative w-[45%] flex mt-10'>
        <ScrollAnimation animateIn='fadeInRight' delay={0.4 * 1000}>
          <div className='relative w-full'>
            <img src={HeroBg} alt='' className='rounded-full scale-75'/>
          </div>
        </ScrollAnimation>
        <ScrollAnimation 
          animateIn='fadeInRight'
          initiallyVisible={true}
          className='absolute bottom-[85px] left-0'
        >
          <img src={HeroImage } alt='' />
        </ScrollAnimation>

      </div>
    </div>
  )
}

export default About