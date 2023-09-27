import NextStepComponent from '../NextStepComponent/NextStepComponent';
import './addOnsComponent.css'
import { useContext, useState } from 'react';
import { PaymentContext } from '../../../context/paymetsContext';


const AddOnsComponent = ({currentStep ,setCurrentStep}:PlanComponentProps) => {
  const [addons, setAddons] = useState<string[]>([]);
  const {paymentType} = useContext(PaymentContext)
  const {setAddon} = useContext(PaymentContext)


  const handleAddons = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target;
    if(checked) {
      setAddons([...addons, name])
    } else {
      setAddons(addons.filter(addon => addon !== name))
    }
  }

  const handleSubmit = () => {
    setAddon(addons);
    setCurrentStep(currentStep + 1);
  }
   
  return (
    <div className="form-container">
      <h1 className="form-title">Pick add-ons</h1>
      <span className="form-description">Add-ons help enhance your gaming experience.</span>
      <section className="addons-container">
        <div className={addons.includes('online') ? 'addon selected' : 'addon'}>
          <input type='checkbox' id='addon1' name='online' className='addon-checkbox' onChange={handleAddons}/>
          <div className="addon-title">
            <p className='addon-description'>Online service</p>
            <p className="addon-sub-description">Access to multiplayer games</p>
          </div>
          <span className="addon-price">{paymentType === 'monthly' ? '+$1/mo' : '+$10/yr'}</span>
        </div>
        <div className={addons.includes('larger') ? 'addon selected' : 'addon'}>
        <input type='checkbox' id='addon2' name='larger' className='addon-checkbox' onChange={handleAddons}/>
          <div className="addon-title">
            <p className='addon-description'>Larger storage</p>
            <p className="addon-sub-description">Extra 1TB cloud save</p>
          </div>
          <span className="addon-price">{paymentType === 'monthly' ? '+$2/mo' : '+$20/yr'}</span>
        </div>
        <div className={addons.includes('customizable') ? 'addon selected' : 'addon'}>
        <input type='checkbox' id='addon3' name='customizable' className='addon-checkbox' onChange={handleAddons}/>
          <div className="addon-title">
            <p className='addon-description'>Customizable Profile</p>
            <p className="addon-sub-description">Custom theme on your profile</p>
          </div>
          <span className="addon-price">{paymentType === 'monthly' ? '+$2/mo' : '+$20/yr'}</span>
        </div>
      </section>
      <NextStepComponent currentStep={currentStep} setCurrentStep={setCurrentStep} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default AddOnsComponent;