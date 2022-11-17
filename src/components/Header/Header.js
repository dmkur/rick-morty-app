import {Link} from "react-router-dom";

const Header = () => {
  return (
      <div>
        <ul>
            <li><Link to={'/character'}>Characters</Link></li>
            <li><Link to={'/episode'}>Episodes</Link></li>
            <li><Link to={'/location'}>Locations</Link></li>
        </ul>
      </div>
  )
};

export {Header};