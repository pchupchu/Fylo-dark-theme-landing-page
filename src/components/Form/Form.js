import './Form.css';
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Form() {

  const { values, handleChange, isValid } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="form">
      <div className="form__container">
        <h2 className='form__title'>Get early access today</h2>
        <p className='form__text'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
        <form onSubmit={handleSubmit} className="form__box">
          <label className="form__label">
            <input
              type="email"
              className="form__item"
              id="email"
              name="email"
              placeholder="email@example.com"
              required
              value={values.email || ""}
              onChange={handleChange}
            />
            <span
              className={`form__item-error ${
                isValid ? "" : "form__item-error_active"
              }`}
            >
              Error, please check your email
            </span>
          </label>
          <button
              type="submit"
              disabled={!isValid}
              className={`form__button ${
                isValid ? "" : "form__button_inactive"
              }`}
            >Get Started For Free
            </button>
        </form>
      </div>
      
    </section>
  );
}

export default Form;
