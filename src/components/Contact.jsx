import Logo1 from '../assets/logoPrueba1.png'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items p-4'>
            <form method='POST' action="https://getform.io/f/06799291-97c1-4706-8d67-f1722a54d4f5" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#503CD1] text-gray-300'>Contacto</p>
                    <p className='text-gray-300 py-4 '>// Completá en formulario o enviame un email a <strong>matod87@hotmail.com</strong></p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Nombre' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name='message' rows='8' placeholder='Mensaje'></textarea>
                <button className='text-white border-2 hover:bg-[#503CD1] hover:border-[#503CD1] px-4 py-3 my-8 mx-auto flex items-center'>Hablá conmigo !</button>
                <div className='text-white px-4 py-3 my-8 mx-auto flex items-center'>
                    <img src={Logo1} alt="Logo Image" style={{ width: '120px' }} />
                </div>
            </form>
        </div>
    )
}
export default Contact