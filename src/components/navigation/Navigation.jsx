const logo = 'https://cdn.dribbble.com/users/801484/screenshots/2661136/kgdribble.png?compress=1&resize=400x300';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch } from 'react-redux';
import { performSearch } from "../../features/searchAndFilter/searchAndFilterSlice";

export default function Navigation() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const handleChange = (e) => {
        setInput(e.target.value)
        dispatch(performSearch(e.target.value))
    }

    return (
        <nav className="bg-slate-100 shadow-md shadow-slate-300">
            <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
                <Link to="/" className="flex items-center gap-2 border pr-2 shadow-md rounded-md">
                    <img className="h-10 w-22 rounded-md" src={logo} alt="Learn with Sumit" />
                    <p className="font-medium italic">Video Hub</p>
                </Link>
                <div className="px-5 w-96">
                    <input type="search" className="border-slate-300 rounded-full px-5 shadow-md w-full caret-indigo-500 py-2 outline-none" placeholder="Search..." value={input} onChange={handleChange} />
                </div>
                <Link
                    to="/videos/add"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#2c3a47] focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                >
                    + Add Video
                </Link>
            </div>
        </nav>
    );
}
