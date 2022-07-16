export const Success = ({ text, goTo }) => {
    return (
        <>
            {' '}
            <div
                className={`absolute top-0 right-0 bottom-0 left-0 z-10 bg-white py-12 transition duration-150 ease-in-out                `}
            >
                <div
                    role="alert"
                    class="container mx-auto w-11/12 max-w-lg md:w-2/3"
                >
                    <div class="relative rounded border border-gray-400 bg-white py-8 px-5 shadow-md md:px-10">
                        <div class="mb-3 flex w-full justify-start text-gray-600"></div>
                        <h1 class="font-lg mb-4 font-bold leading-tight tracking-normal text-gray-800">
                            {text}
                        </h1>

                        <button
                            class="absolute top-0 right-0 mt-4 mr-5 cursor-pointer rounded text-gray-400 transition duration-150 ease-in-out hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
                            onClick={() => console.log('cerrar')}
                            aria-label="close modal"
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-x"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                stroke-width="2.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
