import {Outlet, Route, Routes} from "react-router-dom";
import {Character} from "../../components/Character/Character";
import {Episode} from "../../components/Episode/Episode";
import {Location} from "../../components/Location/Location";

const MainLayout = () => {
    return (
        <div>
            <Routes>
                    <Route path={'character'} element={<Character/>}/>
                    <Route path={'episode'} element={<Episode/>}/>
                    <Route path={'location'} element={<Location/>}/>
            </Routes>

            <Outlet/>
        </div>
    )
};

export {MainLayout};