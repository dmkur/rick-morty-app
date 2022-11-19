import {Link} from "react-router-dom";

const Header = () => {
  return (
      <div>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/character'}>Character</Link></li>
        </ul>
      </div>
  )
};

export {Header};