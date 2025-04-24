
import Resume from '../../assets/Munendra_Resume.pdf'
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { ImBlog } from "react-icons/im";
import { GrDocumentText } from "react-icons/gr";

const NavBar = ({theme, setTheme}) => {

    function changeMode() {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }
    const navigate = useNavigate();


  return (
      <div className={`${theme === 'dark' ? 'text-white' : ''}  fixed top-0 left-0 bg-transparent bg-opacity-0 backdrop-blur-lg w-full z-50`}>
          <nav className='flex justify-between items-center p-5 tracking-wide max-w-[90%] mx-auto w-[2400px]'>
            <div onClick={() => navigate('/')} className=' cursor-pointer'>
                <span className='text-4xl'>{`<Munendra/>`}</span>
            </div>
            
            <div className='flex gap-7 justify-center items-center'>
                <div className={`w-[60px] h-[35px] border rounded-full relative cursor-pointer  ${theme === 'light' ? 'bg-pink' : 'bg-green'}`} onClick={changeMode}>
                    <div className={`w-[20px] h-[20px] rounded-full absolute px-[5px] top-[22.4%] bg-white transition-all duration-[350ms] ease-custom-bezier ${theme === 'light' ? 'translate-x-[32px]': 'translate-x-[6px]'} `}></div>
                </div>

                <div className='flex gap-x-8 justify-center items-center font-medium'>
                    <div className='group'>
                        <div onClick={() => navigate('/')} className={`text-lg cursor-pointer flex items-center gap-1 `}>
                            <AiOutlineHome/>
                            <p>HOME</p>
                        </div>
                        <div className={` h-[4px] rounded ${theme === 'light' ? 'bg-pink' : 'bg-green'} w-0 group-hover:w-full transition-all ease-in-out duration-300`}></div>
                    </div>
                
                    <div className='group'>
                        <div onClick={() => navigate('/about')} className={`text-lg cursor-pointer flex items-center gap-1 `}>
                            <GoPerson/>
                            <p>ABOUT ME</p>
                        </div>
                        <div className={` h-[4px] rounded ${theme === 'light' ? 'bg-pink' : 'bg-green'} w-0 group-hover:w-full transition-all ease-in-out duration-300`}></div>
                    </div>
                    
                    <div className='group'>
                        <div onClick={() => navigate('/projects')} className={`text-lg cursor-pointer flex items-center gap-1 `}>
                            <HiOutlinePresentationChartLine/>
                            <p>PROJECTS</p>
                        </div>
                        <div className={` h-[4px] rounded ${theme === 'light' ? 'bg-pink' : 'bg-green'} w-0 group-hover:w-full transition-all ease-in-out duration-300`}></div>
                    </div>
                    
                    <div className='group'>
                        <div onClick={() => navigate('/contact')} className={`text-lg cursor-pointer flex items-center gap-1 `}>
                            <ImBlog/>
                            <p>CONTACT</p>
                        </div>
                        <div className={` h-[4px] rounded ${theme === 'light' ? 'bg-pink' : 'bg-green'} w-0 group-hover:w-full transition-all ease-in-out duration-300`}></div>
                    </div>
                </div>

                <div className='font-medium'>
                    <div className={`text-lg cursor-pointer flex items-center gap-1 py-[5px] px-5 ${theme === 'light' ? 'bg-pink text-white hover:bg-[#ba386e]' : 'bg-green hover:bg-[#04873b]'} rounded-full transition-all duration-[250ms]`}>
                        <GrDocumentText/>
                        <a href={Resume} download>RESUME</a>
                    </div>
                </div>
            </div>
          </nav>
    </div>
  )
}

export default NavBar