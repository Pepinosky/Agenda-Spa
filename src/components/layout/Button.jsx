export default function Button({ text, onClick, className, type }) {
    return (
        <>
            <button
                type={type}
                className="m-6 rounded-lg border border-green-700 px-12 py-3 text-center text-sm font-medium text-green-700 hover:bg-green-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600 dark:hover:text-white dark:focus:ring-green-800"
                onClick={onClick}
            >
                {text}
            </button>
        </>
    )
}
