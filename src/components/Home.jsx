import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='
        /* text-pink-600 */
        text-[#503CD1]
        '>Hola, mi nombre es</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Matias Donati</h1>
        <h2 className='ext-4xl sm:text-7xl font-bold text-[#8892b0]'>Full Stack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit nam voluptas sed ipsam fugit similique recusandae provident dolorem exercitationem corporis voluptatem.</p>
        <div>
          <Link to="works" smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#503CD1] hover:border-[#503CD1]'>Ver Trabajos
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>

          </Link>

        </div>
      </div>
    </div>
  )
}
export default Home