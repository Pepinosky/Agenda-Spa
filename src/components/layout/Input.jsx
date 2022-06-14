export default function Input({ type, labelText, onChange }) {
    return (
        <>
            <div className="flex  flex-col">
                <label
                    htmlFor={labelText}
                    className="mx-16 flex  flex-col font-bold"
                >
                    {labelText}
                    <input
                        type={type}
                        className="cursor-pointer border-2 border-solid px-2 py-1"
                        onChange={onChange}
                    />
                </label>
            </div>
        </>
    )
}
