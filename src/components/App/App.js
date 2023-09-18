import About from '../About/About';
import Advantages from '../Advantages/Advantages';
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
      <p>
  Get early access today

  It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
  questions, our support team would be happy to help you.

  Get Started For Free

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
