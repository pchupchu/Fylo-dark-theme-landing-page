import './Hero.css';
import hero from '../../images/illustration-intro.png'

function Hero() {
  return (
    <section className="hero">
      <img className="hero__image" src={hero} alt="people with papers" />
      <h1 className='hero__title'>All your files in one secure location, accessible anywhere.</h1>
      <p className='hero__text'>Fylo stores all your most important files in one secure location. Access them wherever 
  you need, share and collaborate with friends family, and co-workers.</p>
      <button className='hero__button'>Get Started</button>
    </section>
  );
}

export default Hero;
