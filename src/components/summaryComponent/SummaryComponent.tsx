import NextStepComponent from '../NextStepComponent/NextStepComponent';
import './SummaryComponent.css';

const SumarryComponent = ({currentStep ,setCurrentStep}:PlanComponentProps) => {
  return (
    <div className="form-container">
      <h1 className="form-title">Finishing up</h1>
      <span className="addons-subtitle">Double-check everything looks OK before confirming.</span>
      <section className="summary-container">
        <div className="summary">
          <div className="summary-type">
            <p className='summary-plan'>Arcade (Yearly)</p>
            <p className='summary-plan-subtitle'>Change</p>
          </div>
          <p className='summary-plan-price'>$9/yr</p>
        </div>
        <div className="summary">
          <p className='summary-plan-subtitle'>Online service</p>
          <p className="summary-addons-price">+10$/yr</p>
        </div>
        <div className="summary">
          <p className="summary-plan-subtitle">Larger storage</p>
          <p className="summary-addons-price">+$20/yr</p>
        </div>
        <div className="summary">
        <p className='summary-plan-subtitle'>Total(per month)</p>
        <p className='summary-total-price'>+$12/mo</p>
        </div>
      </section>
      <NextStepComponent currentStep={currentStep} setCurrentStep={setCurrentStep}/>
    </div>
  )
}

export default SumarryComponent;