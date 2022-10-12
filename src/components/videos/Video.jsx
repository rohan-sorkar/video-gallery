import { Link } from "react-router-dom";

export default function Video() {

    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03] border shadow-md rounded-xl">
            <div className="w-full flex flex-col">
                <div className="relative">
                    <Link to={`/videos/1`}>
                        <img
                            src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
                            className="w-full h-auto rounded-xl"
                            alt='title'
                        />
                    </Link>

                    <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                        10:35
                    </p>
                </div>

                <div className="flex flex-row mt-2 gap-2 p-5">
                    <img
                        src='https://yt3.ggpht.com/D9X91qRuvaOSs2L5ai9ydYsfuW8sUYgeMs7gsCuGkbElWYtRmraazV6U9a277kGJ_MHEOTjdtcI=s900-c-k-c0x00ffffff-no-rj'
                        className="rounded-full h-6 w-6 shrink-0"
                        alt='learn with summit'
                    />

                    <div className="flex flex-col">
                        <Link to={`/videos/1`}>
                            <p className="text-slate-900 text-sm font-semibold">
                            যে ১০ টি ভুল বিগিনার রিয়্যাক্ট ডেভেলপাররা করে থাকেন
                            </p>
                        </Link>
                        <span className="text-gray-400 text-xs hover:text-gray-600">
                            learn with summit
                        </span>
                        <p className="text-gray-400 text-xs">
                            22.3k views . May 10, 2022
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
