import { useState } from "react";
import NextStepComponent from "../NextStepComponent/NextStepComponent";
import './formComponent.css'
import validateForm from '../../utils/validateForm'
import { isMobile } from "../../utils/userAgent";

interface FormComponentProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

const FormComponent = ({currentStep,setCurrentStep }:FormComponentProps) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors : { [key: string]: string } = {};
    
    let validate = validateForm(formValues)
    if (validate.name) newErrors.name = validate.name
    if (validate.email) newErrors.email = validate.email
    if (validate.phone) newErrors.phone = validate.phone
    setErrors(newErrors);
    
    if(formValues.name.length > 0 && formValues.email.length > 0 && formValues.phone.length > 0) { 
      if(Object.keys(newErrors).length === 0) {
      localStorage.setItem('formValues', JSON.stringify(formValues))
      setFormValues({
        name: '',
        email: '',
        phone: ''
      })
      setCurrentStep(currentStep + 1);
      }
    } 
  }

  return (
    <div className="form-container">
      <h1 className="form-title">Personal info</h1>
      <span className="form-description">Please provide your name, email, address, and phone number.</span>
      <div className="form-wrapper">

        <form className="form" style={{ width: '100%' }} >
          <label htmlFor="name" className="form-label">Name
            {errors.name && <span className="form-error">{errors.name}</span>}
          </label>
          <input onChange={handleChange} type="text" id="name" name="name" value={formValues.name} placeholder="Your name.." className={`form-input ${errors.name ? 'form-input-error' : ''}`} />
          <label htmlFor="email" className="form-label">Email Address
            {errors.email && <span className="form-error">{errors.email}</span>}
          </label>
          <input onChange={handleChange} type="text" id="email" name="email" value={formValues.email} placeholder="Your email.." className={`form-input ${errors.email ? 'form-input-error' : ''}`} />
          <label htmlFor="phone" className="form-label">Phone Number
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </label>
          <input onChange={handleChange} type="text" id="phone" name="phone" maxLength={8} value={formValues.phone} placeholder="Your phone number.." className={`form-input ${errors.phone ? 'form-input-error' : ''}`} />
        </form>
      </div>
        <NextStepComponent currentStep={currentStep} setCurrentStep={setCurrentStep} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default FormComponent;