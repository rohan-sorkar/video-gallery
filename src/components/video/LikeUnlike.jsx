import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";

export default function LikeUnlike() {
    return (
        <div className="flex gap-10 w-48 mb-5">
            <div className="flex gap-1 cursor-pointer">
                <div className="shrink-0">
                    <img className="w-5 block" src={likeImage} alt="Like" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    0
                </div>
            </div>
            <div className="flex gap-1 cursor-pointer">
                <div className="shrink-0">
                    <img className="w-5 block" src={unlikeImage} alt="Unlike" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    0
                </div>
            </div>
        </div>
    );
}
