import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbarList'>
        <li>
          <Link className='listItem' to='/'>
            HOME
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;