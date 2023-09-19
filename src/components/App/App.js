import About from '../About/About';
import Advantages from '../Advantages/Advantages';
import Form from '../Form/Form';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Reviews from '../Reviews/Reviews';
import './App.css'

function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <About />
      <Advantages />
      <Reviews />
      <Form />
      <p>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
  dolore magna aliqua

  +1-543-123-4567
  example@fylo.com

  About Us
  Jobs
  Press
  Blog

  Contact Us
  Terms
  Privacy
      </p>
    </div>
  );
}

export default App;
