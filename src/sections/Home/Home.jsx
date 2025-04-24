import React from 'react'
import HelloGif from '../../assets/Hello.gif'
import TypedText from '../../components/TypedText'
import ScrollAnimation from 'react-animate-on-scroll'
import Illustration from "../../assets/illustration.svg"

const Home = ({theme}) => {
  return (
    <div className='w-full' id='home'>
      <div className={`${theme === 'dark' ? 'text-white' : ''} max-w-[90%] mx-auto w-[2400px] flex justify-between items-center pt-[13%] p-8 tracking-wide`}>
        <div className='flex flex-col gap-y-8'>
          
          <div className='flex flex-col gap-y-2'>
            <ScrollAnimation animateIn='fadeInUp'>
              <div className='flex gap-x-2'>
                <span>Hello</span> <span><img alt='' src={HelloGif} width='25px'/></span> <span>, I'm </span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <p className=' text-7xl font-bold'>Munendra Singh</p>
            </ScrollAnimation>
          </div>

          <div className='flex flex-col gap-y-2'>
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <TypedText theme={theme} />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <p className='text-lg'>I'm a software developer and here is my portfolio website.</p>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <div>
              <a rel="noopener noreferrer" className={`py-4 px-8 rounded-lg text-white transition-all duration-[250ms]  ${theme === 'light' ? 'bg-pink hover:bg-[#ba386e]' : 'bg-green hover:bg-[#04873b]'}` } href='https://www.linkedin.com/in/munendra-bhadouriya/' target='_blank'>Hire Me</a>
            </div>
          </ScrollAnimation>

        </div>

        <div >
          <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
            <img alt='' src={Illustration} className='max-w-[500px]' />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

export default Home