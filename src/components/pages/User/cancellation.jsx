const Cancellation = () => {
    return (
        <div className='w-full h-full py-44 px-4'>
           <div className="mx-auto">
                <div className="md:flex  flex-col items-center content-center justify-center p-1 text-center sm:text-left">
                <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold  '>Cancelar Reserva</h1>
                <form action="">
                <label className='' > 
                        <span className='md:text-3xl sm:text-2xl font-light'>Ingresa el numero de tu reserva</span>
                        <br />
                        <input className='mt-4 form-input cursor-pointer w-full' type="text" />
                        
                </label>
                <button className=' text-center border-2 border-black rounded-md hover:bg-black hover:text-lime-500 hover:p-4 duration-500 mt-12 w-full '> Cancelar reserva</button>
                </form>
                </div>
           </div>
          </div>
)}
export default Cancellation;