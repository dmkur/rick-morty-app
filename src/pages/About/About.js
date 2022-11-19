import {Route, Routes} from "react-router-dom";
import {Character, Home} from "../../components";

const About = () => {
  return (
      <div>
        <Routes>
            <Route index path={'/'} element={<Home/>}/>
            <Route path={'character'} element={<Character/>}/>
        </Routes>
      </div>
  )
};

export {About};