import About from '../About/About';
import Advantages from '../Advantages/Advantages';
import Form from '../Form/Form';
import Hero from '../Hero/Hero';
import Reviews from '../Reviews/Reviews';
import './Main.css'

function Main() {
  return (
    <main className='content'>
      <Hero />
      <About />
      <Advantages />
      <Reviews />
      <Form />
    </main>
  );
}

export default Main;
