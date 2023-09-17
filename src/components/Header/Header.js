import './Header.css';
import logo from '../../images/logo.svg'

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <nav>
        <ul className='header__links'>
          <li><a className='header__link' href=' '>Features</a></li>
          <li><a className='header__link' href=' '>Team</a></li>
          <li><a className='header__link' href=' '>Sign In</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
