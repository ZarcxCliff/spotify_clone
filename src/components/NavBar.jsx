import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex w-full justify-between items-center font-semibold   ">
                <div className="flex items-center gap-2">
                    <img
                        onClick={() => navigate(-1)}
                        className="w-8 bg-black rounded-2xl cursor-pointer "
                        src={assets.arrow_left}
                        alt="arrow_left"
                    />
                    <img
                        onClick={() => navigate(1)}
                        className="w-8 bg-black rounded-2xl cursor-pointer "
                        src={assets.arrow_right}
                        alt="arrow_left"
                    />
                </div>
                <div className="flex items-center gap-4 ">
                    <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer ">
                        Explore Premium
                    </p>
                    <p className="bg-black py-1 px-3 rounded-2xl text-white  text-[15px ] cursor-pointer">
                        Install App
                    </p>
                    <p className=" bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center  ">
                        D
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer  ">
                    All
                </p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
                    Music
                </p>
                <p className="bg-black px-4 py-1 rounded-s-2xl cursor-pointer ">
                    Podcast
                </p>
            </div>
        </>
    );
};

export default NavBar;
