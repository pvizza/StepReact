import { useState } from "react";
import NextStepComponent from "../NextStepComponent/NextStepComponent";
import './formComponent.css'

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
    if(formValues.name.length > 0 && formValues.email.length > 0 && formValues.phone.length > 0) { 
      localStorage.setItem('formValues', JSON.stringify(formValues))
      setFormValues({
        name: '',
        email: '',
        phone: ''
      })
      setCurrentStep(currentStep + 1);
    } 
   
  }
  console.log(currentStep)
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
          <input onChange={handleChange} type="text" id="phone" name="phone"  value={formValues.phone} placeholder="Your phone number.." className="form-input" />
          <NextStepComponent currentStep={currentStep} setCurrentStep={setCurrentStep} handleSubmit={handleSubmit}/>
        </form>


      </div>
     
    </div>
  );
}

export default FormComponent;