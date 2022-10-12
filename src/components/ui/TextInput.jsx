export default function TextInput({ title, ...attributes }) {
    return (
        <>
            <label className="block text-sm font-medium text-gray-700">
                {title}
            </label>
            <input
                type="text"
                className="mt-1 block w-full sm:text-sm rounded-md border py-2 outline-none shadow-sm px-5"
                {...attributes}
            />
        </>
    );
}
