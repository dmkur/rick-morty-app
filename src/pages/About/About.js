import {Route, Routes} from "react-router-dom";
import {Characters, Episode, Home, Location} from "../../components";

const About = () => {
    return (
        <Routes>
            <Route index path={'/'} element={<Home/>}/>
            <Route path={'character'} element={<Characters/>}/>
            <Route path={'episode'} element={<Episode/>}/>
            <Route path={'location'} element={<Location/>}/>
        </Routes>
    )
};

export {About};