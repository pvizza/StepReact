import NextStepComponent from '../NextStepComponent/NextStepComponent';
import './addOnsComponent.css'

const AddOnsComponent = ({currentStep ,setCurrentStep}:PlanComponentProps) => {
  return (
    <div className="form-container">
      <h1 className="form-title">Pick add-ons</h1>
      <span className="addons-subtitle">Add-ons help enhance your gaming experience.</span>
      <section className="addons-container">
        <div className="addon">
          <input type='checkbox' id='addon1' className='addon-checkbox'/>
          <div className="addon-title">
            <p className='addon-description'>Online service</p>
            <p className="addon-sub-description">Access to multiplayer games</p>
          </div>
          <span className="addon-price">+$1/mo</span>
        </div>
        <div className="addon">
        <input type='checkbox' id='addon2' className='addon-checkbox'/>
          <div className="addon-title">
            <p className='addon-description'>Larger storage</p>
            <p className="addon-sub-description">Extra 1TB cloud save</p>
          </div>
          <span className="addon-price">+$2/mo</span>
        </div>
        <div className="addon">
        <input type='checkbox' id='addon3' className='addon-checkbox'/>
          <div className="addon-title">
            <p className='addon-description'>Customizable Profile</p>
            <p className="addon-sub-description">Custom theme on your profile</p>
          </div>
          <span className="addon-price">+$2/mo</span>
        </div>
      </section>
      <NextStepComponent currentStep={currentStep} setCurrentStep={setCurrentStep}/>
    </div>
  )
}

export default AddOnsComponent;