import './Header.css';
import logo from '../../images/logo.svg'

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <nav className='header__navigation'>
        <ul className='header__links'>
          <li><a className='header__link' href=' '>Features</a></li>
          <li><a className='header__link' href=' '>Team</a></li>
          <li><a className='header__link' href=' '>Sign In</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
