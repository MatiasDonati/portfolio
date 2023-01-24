import Vsc from '../assets/vsc.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react8.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind-css.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4 '>// Estas son las tecnologías con las que he trabajado</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {/* <div className='shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Vsc} alt="Vsc icon" />
                        <p className='my-4'>VSC</p>
                    </div> */}
                    <div className=' shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="Html icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="Css icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                        <p className='my-4'>GitHub</p>
                    </div>
                    <div className='shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                        <p className='my-4'>Node</p>
                    </div>
                    <div className='shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={FireBase} alt="FireBase icon" />
                        <p className='my-4'>FireBase</p>
                    </div>
                    <div className='shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Tailwind} alt="FireBase icon" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills