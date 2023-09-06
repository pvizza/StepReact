import { useEffect, useRef, useState } from "react";
import NextStepComponent from "../NextStepComponent/NextStepComponent";
import './formComponent.css'
import validateForm from '../../utils/validateForm'

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
    let validate = validateForm(formValues)
    if(formValues.name.length > 0 && formValues.email.length > 0 && formValues.phone.length > 0) { 
     const nameError = validate.name ? alert(validate.name) :  true;
     const emailError = validate.email ? alert(validate.email) : true;
     const phoneError = validate.phone ? alert(validate.phone) : true;
      if(nameError && emailError && phoneError) {
      localStorage.setItem('formValues', JSON.stringify(formValues))
      setFormValues({
        name: '',
        email: '',
        phone: ''
      })
      setCurrentStep(currentStep + 1);
      }
    } else {
      alert('Please fill all fields')
    }
   
  }

  return (
    <div className="form-container">
      <h1 className="form-title">Personal info</h1>
      <span className="form-description">Please provide your name, email, address, and phone number.</span>
      <div className="form-wrapper">

        <form className="form" style={{ width: '100%' }} >
          <label htmlFor="name" className="form-label">Name</label>
          <input onChange={handleChange} type="text" id="name" name="name" value={formValues.name} placeholder="Your name.." className="form-input" />
          <label htmlFor="email" className="form-label">Email</label>
          <input onChange={handleChange} type="text" id="email" name="email" value={formValues.email} placeholder="Your email.." className="form-input" />
          <label htmlFor="phone" className="form-label">Phone</label>
          <input onChange={handleChange} type="text" id="phone" name="phone" maxLength={8} value={formValues.phone} placeholder="Your phone number.." className="form-input" />
          <NextStepComponent currentStep={currentStep} setCurrentStep={setCurrentStep} handleSubmit={handleSubmit}/>
        </form>


      </div>
     
    </div>
  );
}

export default FormComponent;