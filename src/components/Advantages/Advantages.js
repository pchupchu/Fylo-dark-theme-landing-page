import './Advantages.css';
import advantages from '../../images/illustration-stay-productive.png';

function Advantages() {
  return (
    <div className="advantages">
      <img className="advantages__image" src={advantages} alt="people with ideas" />
      <div className='advantages__container'>
        <h2 className='advantages__title'>Stay productive, wherever you are</h2>
        <p className='advantages__text'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p className='advantages__text'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        <a className='advantages__link' href=' '>See how Fylo works </a>
      </div>
    </div>
  );
}

export default Advantages;
