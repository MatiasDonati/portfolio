import WorkImg from '../assets/projects/workImg.jpeg'
import RaealState from '../assets/projects/realestate.jpg'
import Yanilog from '../assets/projects/yanilog1.jpg'
import Teclados from '../assets/projects/teclados1.jpg'
import Traductor from '../assets/projects/traductor.jpg'

const Works = () => {
    return (
        <div name='works' className='w-full md:h-screen text-gray-300  bg-[#0a192f]'>
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Trabajos</p>
                    <p className='py-6'>// Algunos de mis trabajos</p>
                </div>

                {/* Container */}
                <div
                    // style={{ backgroundImage: `url(${WorkImg})` }}
                    className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'
                >

                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Yanilog})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://yanilog.vercel.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/MatiasDonati/PreEntrega1-Donati" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Teclados})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Javascript App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://matiasdonati.github.io/dom/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/MatiasDonati/dom" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Yanilog})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://yanilog.vercel.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/MatiasDonati/PreEntrega1-Donati" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Teclados})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Javascript App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://matiasdonati.github.io/dom/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/MatiasDonati/dom" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Works