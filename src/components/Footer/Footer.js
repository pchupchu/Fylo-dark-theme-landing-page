import './Footer.css';
import logo from '../../images/logo.svg'

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="logo" />
      <div className="footer__container">
        <div className='footer__contacts'>
          <div className='footer__icon footer__icon_address'></div>
          <p className='footer__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
  dolore magna aliqua</p>
          <div className='footer__icon footer__icon_phone'></div>
          <p className='footer__text'>+1-543-123-4567</p>
          <div className='footer__icon footer__icon_email'></div>
          <p className='footer__text'>example@fylo.com</p>
        </div>
        <nav className='footer__navigation'>
          <ul className='footer__links'>
              <li>
                <a className='footer__text footer__link' href=' '>About Us</a>
              </li>
              <li>
                <a className='footer__text footer__link' href=' '>Jobs</a>
              </li>
              <li>
                <a className='footer__text footer__link' href=' '>Press</a>
              </li>
              <li>
                <a className='footer__text footer__link' href=' '>Blog</a>
              </li>
          </ul>
          <ul className='footer__links'>
            <li>
              <a className='footer__text footer__link' href=' '>Contact Us</a>
            </li>
            <li>
              <a className='footer__text footer__link' href=' '>Terms</a>
            </li>
            <li>
              <a className='footer__text footer__link' href=' '>Privacy</a>
            </li>
          </ul>
        </nav>
        {/* <div>
          <ul className='footer__links'>
            <li>
              <a className='footer__text footer__link' href=' '>Contact Us</a>
            </li>
            <li>
              <a className='footer__text footer__link' href=' '>Terms</a>
            </li>
            <li>
              <a className='footer__text footer__link' href=' '>Privacy</a>
            </li>
          </ul>
        </div> */}
        <div>
          <ul className='footer__links  footer__social-icons'>
            <li>
            <a className='footer__social-icon footer__social-icon_facebook' href='https://www.facebook.com/'> </a>
            </li>
            <li>
            <a className='footer__social-icon footer__social-icon_twitter' href='https://twitter.com/'> </a>
            </li>
            <li>
            <a className='footer__social-icon footer__social-icon_instagram' href='https://www.instagram.com/'>
            </a>
            </li>
          </ul>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
