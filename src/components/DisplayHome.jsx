import AlbumItem from "./AlbumItem";
import NavBar from "./NavBar";
import SongItem from "./SongItem";
import { albumsData, songsData } from "../assets/assets";
const DisplayHome = () => {
    return (
        <>
            <NavBar />
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Featured charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (
                        <AlbumItem
                            key={index}
                            image={item.image}
                            name={item.name}
                            id={item.id}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">
                    Today`s biggest hits
                </h1>
                <div className="flex overflow-auto">
                    {songsData.map((item, index) => (
                        <SongItem
                            key={index}
                            image={item.image}
                            name={item.name}
                            id={item.id}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default DisplayHome;
