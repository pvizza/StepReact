import { useState } from 'react';
import './App.css'
import FormComponent from './components/formComponent/FormComponent'
import SideComponent from './components/sideComponent/SideComponent'

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
     <main className='app_container'>
      <div className='app'>
      <SideComponent currentStep={currentStep} />
      <FormComponent currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>

     </main>
    </>
  )
}

export default App
