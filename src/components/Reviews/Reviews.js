import './Reviews.css';
import profile1 from '../../images/profile-1.jpg';
import profile2 from '../../images/profile-2.jpg';
import profile3 from '../../images/profile-3.jpg';

function Reviews() {
  return (
    <section className="reviews">
      <ul className='reviews__list'>
        <li className='reviews__item'>
          <div className='reviews__quotes'></div>
          <p className='reviews__text'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
          <div className='reviews__author'>
            <img className="reviews__image" src={profile1} alt="man" />
            <div>
              <h3 className='reviews__name'>Satish Patel</h3>
              <p className='reviews__profession'>Founder & CEO, Huddle</p>
            </div>
          </div>
        </li>
        <li className='reviews__item'>
          <p className='reviews__text'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <div className='reviews__author'>
              <img className="reviews__image" src={profile2} alt="man" />
              <div>
                <h3 className='reviews__name'>Bruce McKenzie</h3>
                <p className='reviews__profession'>Founder & CEO, Huddle</p>
              </div>
            </div>
        </li>
        <li className='reviews__item'>
            <p className='reviews__text'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <div className='reviews__author'>
              <img className="reviews__image" src={profile3} alt="woman" />
              <div>
                <h3 className='reviews__name'>Iva Boyd</h3>
                <p className='reviews__profession'>Founder & CEO, Huddle</p>
              </div>
            </div>
        </li>
      </ul>
    </section>
  );
}

export default Reviews;
