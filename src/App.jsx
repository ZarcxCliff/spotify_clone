import { useContext } from "react";
import Display from "./components/Display";
import Player from "./components/Player";
import SideBar from "./components/SideBar";
import { PlayerContext } from "./context/PlayerContext";

function App() {
    const { audioRef, track } = useContext(PlayerContext);
    return (
        <div className="h-screen bg-black">
            <div className="h-[90%] flex">
                <SideBar />
                <Display />
            </div>
            <Player />
            <audio src={track.file} ref={audioRef} preload="auto"></audio>
        </div>
    );
}

export default App;
