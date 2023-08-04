import NextStepComponent from "../NextStepComponent/NextStepComponent";
import './formComponent.css'

const FormComponent = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Personal info</h1>
      <span className="form-description">Please provide your name, email, address, and phone number.</span>
      <div className="form-wrapper">
        <form className="form" style={{ width: '100%' }}>
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." className="form-input" />
          <label htmlFor="email" className="form-label">Email</label>
          <input type="text" id="email" name="email" placeholder="Your email.." className="form-input" />
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="text" id="phone" name="phone" placeholder="Your phone number.." className="form-input" />
        </form>
      </div>
      <NextStepComponent />
    </div>
  );
}

export default FormComponent;