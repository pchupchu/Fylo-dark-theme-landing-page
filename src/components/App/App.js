import About from '../About/About';
import Advantages from '../Advantages/Advantages';
import Footer from '../Footer/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
