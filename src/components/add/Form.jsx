import { useState } from "react";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import shortid from "shortid";

export default function Form() {
  const [tagFields, setTagField] = useState([{ id: 1, value: "" }]);
  const addTag = () => {
    const newTag = {
      id: shortid.generate(),
      value: "",
    };
    if (tagFields.length >= 3) {
      alert("you can not add more than 3 items🤔");
    } else {
      setTagField([...tagFields, newTag]);
    }
  };

  const deleteTag = (id) => {
    if(tagFields.length === 1) {
        alert('there will must be one tagField')
    } else {
        setTagField([...tagFields.filter(tag => tag.id !== id)])
    }
  }

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [views, setViews] = useState("");

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setAuthor("");
    setLink("");
    setThumbnail("");
    setDate("");
    setDuration("");
    setViews("");
  };

  return (
    <form>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Video title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextArea
                title="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="YouTube Video link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="Thumbnail link"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput
                title="Upload Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video Duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video no of views"
                value={views}
                onChange={(e) => setViews(e.target.value)}
              />
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <p className="font-medium text-md text-slate-700">Tags</p>
              {tagFields.map((tag) => (
                <div key={tag.id} className='flex items-center gap-2'>
                  <input
                    type="text"
                    className="border py-2 rounded-md shadow-sm outline-none px-5 my-2"
                    placeholder="write tag name..."
                  />
                  <button onClick={() => deleteTag(tag.id)} type="button" className={`border px-3 py-2 text-sm rounded-full font-medium text-white  mt-4 ${tagFields.length === 1 ? 'cursor-not-allowed bg-slate-100 text-slate-400' : 'cursor-pointer bg-red-400'}`}>delete tag</button>
                </div>
              ))}
              <button
                onClick={addTag}
                type="button"
                className="border px-8 py-2 rounded-xl font-medium bg-purple-300 mt-4"
              >
                add tag
              </button>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
