import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const SideBar = () => {
    const naivgate = useNavigate();
    return (
        <div className="w-[25%] p-2 text-white flex-col gap-2 h-full lg:flex hidden ">
            <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
                <div
                    onClick={() => naivgate("/")}
                    className="flex items-center gap-3 pl-8 cursor-pointer "
                >
                    <img
                        className="w-6"
                        src={assets.home_icon}
                        alt="home icon"
                    />
                    <p className="font-bold ">Home</p>
                </div>
                <div className="flex items-center gap-3 pl-8 cursor-pointer ">
                    <img
                        className="w-6"
                        src={assets.search_icon}
                        alt="home icon"
                    />
                    <p className="font-bold ">Search</p>
                </div>
            </div>
            <div className="bg-[#121212] h-[85%] rounded ">
                <div className="p-4 flex items-center justify-between  ">
                    <div className="flex items-center gap-3 ">
                        <img src={assets.stack_icon} alt="stack icon" />
                        <p className="font-semibold">Your Library</p>
                    </div>
                    <div className="flex items-center gap-3 ">
                        <img
                            className="w-5"
                            src={assets.arrow_icon}
                            alt="arrow"
                        />
                        <img
                            className="w-5"
                            src={assets.plus_icon}
                            alt="plus"
                        />
                    </div>
                </div>
                <div className="flex p-4 bg-[#242424] m-2 rounded font-semibold flex-col items-start justify-start gap-1 pl-4    ">
                    <h1>Create your first play list</h1>
                    <p className="font-light ">it`s easy we will help you</p>

                    <button
                        className=" px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4  "
                        type="button"
                    >
                        create playlist
                    </button>
                </div>
                <div className="flex p-4 bg-[#242424] m-2 rounded font-semibold flex-col items-start justify-start gap-1 pl-4    ">
                    <h1>Let`s find some podcast to follow</h1>
                    <p className="font-light ">
                        we`ll keep you updated on new episodes
                    </p>

                    <button
                        className=" px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 mt4 "
                        type="button"
                    >
                        browse podcast
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
