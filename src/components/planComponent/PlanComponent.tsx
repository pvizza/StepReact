import './planComponent.css';
import { ReactComponent as AdvancedLogo } from "../../assets/icon-advanced.svg";
import { ReactComponent as ArcadeLogo} from "../../assets/icon-arcade.svg"
import { ReactComponent as ProLogo} from "../../assets/icon-pro.svg"
import NextStepComponent from '../NextStepComponent/NextStepComponent';
import { useState } from 'react';


type Plan = 'arcade' | 'advanced' | 'pro' | '';



const PlanComponent = ({currentStep ,setCurrentStep}:PlanComponentProps) => {
  const [plan, setPlan] = useState<Plan>('');

  // TODO: How can I improve this function that is use in all the steps? 
  const handleSubmit = () => {
    if(plan === '') return alert('Please select a plan');
    setCurrentStep(currentStep + 1);
  }

  const selectPlan = (e: React.MouseEvent<HTMLDivElement>) => {
    const planSelected = e.currentTarget.children[1].textContent?.toLowerCase();
    if (planSelected) {
      setPlan(planSelected as Plan);
      console.log(plan)
    }
  }

  return(
    <>
    <div className="form-container">
    <h1 className="form-title">Select your plan</h1>
      <span className="form-description">You have the option monthly or yearly billing</span>
      <section className="plans-container">
        <div className={`${plan === 'arcade' ? 'plan selected' : 'plan' }`} onClick={selectPlan}>
          <p className='plan-subtitle'>$9/mo</p>
          <p className='plan-title'>Arcade</p>
            <ArcadeLogo style={{marginBottom: '25px', flexGrow:'1'}}/>
          </div>
        <div className={`${plan === 'advanced' ? 'plan selected' : 'plan' }`} onClick={selectPlan}>
        <p className='plan-subtitle'>$12/mo</p>
        <p className='plan-title'>Advanced</p>
        <AdvancedLogo style={{marginBottom: '25px', flexGrow:'1'}}/>
           </div>
        <div className={`${plan === 'pro' ? 'plan selected' : 'plan' }`} onClick={selectPlan}>  
        <p className='plan-subtitle'>$15/mo</p>
        <p className='plan-title'>Pro</p>
        <ProLogo style={{marginBottom: '25px', flexGrow:'1'}}/>
         </div>
      </section>
      <div className="plan payment">
        <span className='payment-title'>Monthly</span>
        <input className="toogle-check"type="checkbox" id="toogle"/><label className='toogle-container' htmlFor="toogle">payment toogle</label>
        <span className='payment-title'>Yearly</span>
        </div>
        <NextStepComponent currentStep={currentStep} setCurrentStep={setCurrentStep} handleSubmit={handleSubmit} />
      </div>
    </>
  )
}
export default PlanComponent;