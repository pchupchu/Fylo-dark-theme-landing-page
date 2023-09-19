import './About.css';
import computer from '../../images/icon-access-anywhere.svg';
import shield from '../../images/icon-security.svg';
import clock from '../../images//icon-collaboration.svg';
import folder from '../../images/icon-any-file.svg';


function About() {
  return (
    <section className="about">
      <ul className='about__list'>
        <li className='about__item'>
          <img className="about__image" src={computer} alt="computer and phone" />
          <h2 className='about__title'>Access your files, anywhere</h2>
          <p className='about__text'>The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you everywhere.</p>
        </li>
        <li className='about__item'>
          <img className="about__image" src={shield} alt="shield" />
          <h2 className='about__title'>Security you can trust</h2>
          <p className='about__text'>2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files.</p>
        </li>
        <li className='about__item'>
          <img className="about__image" src={clock} alt="clock and people" />
          <h2 className='about__title'>Real-time collaboration</h2>
          <p className='about__text'>Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required.</p>
        </li>
        <li className='about__item'>
          <img className="about__image" src={folder} alt="folder" />
          <h2 className='about__title'>Store any type of file</h2>
          <p className='about__text'>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
  file types to be securely stored and shared.</p>
        </li>
      </ul>
    </section>
  );
}

export default About;
