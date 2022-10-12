export default function TextArea({ title, ...attributes }) {
    return (
        <>
            <label className="block text-sm font-medium text-gray-700">
                {title}
            </label>
            <div className="mt-1">
                <textarea
                    {...attributes}
                    rows="3"
                    className="shadow-sm mt-1 block w-full sm:text-sm border border-gray-200 rounded-md outline-none px-5 py-2"
                ></textarea>
            </div>
            <p className="mt-2 text-sm text-gray-500">
                Brief description for your video
            </p>
        </>
    );
}
