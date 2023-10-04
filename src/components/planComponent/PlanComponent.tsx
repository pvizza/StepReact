import './planComponent.css';
import { ReactComponent as AdvancedLogo } from "../../assets/icon-advanced.svg";
import { ReactComponent as ArcadeLogo} from "../../assets/icon-arcade.svg"
import { ReactComponent as ProLogo} from "../../assets/icon-pro.svg"
import NextStepComponent from '../NextStepComponent/NextStepComponent';
import { useState } from 'react';
import { useContext } from 'react';
import { PaymentContext } from '../../../context/paymetsContext';
import { isMobile } from '../../utils/userAgent';


type Plan = 'arcade' | 'advanced' | 'pro' | '';
type Payment = 'monthly' | 'yearly';


const PlanComponent = ({currentStep ,setCurrentStep}:PlanComponentProps) => {
  const [plan, setPlan] = useState<Plan>('');
  const [payment, setPayment] = useState<Payment>('monthly');
  const {setPaymentType} = useContext(PaymentContext)
  const {setPlanType} = useContext(PaymentContext)
  
  // TODO: How can I improve this function that is use in all the steps? 
  const handleSubmit = () => {
    if(plan === '') return alert('Please select a plan');
    setPaymentType(payment);
    setCurrentStep(currentStep + 1);
  }

   // Handles the selection of a plan by updating the state with the selected plan and adding the selected plan to the payment type array.
   // TODO: IMPROVE THIS FUNCTION
  const selectPlan = (plan:Plan) => {
    if (plan) {
      setPlan(plan);
      setPlanType(plan)
    }
  }

  const handlePayment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const paymentSelected = e.target.checked ? 'yearly' : 'monthly';
    setPayment(paymentSelected);
  };

  return(
    <>
    <div className="form-container">
    <h1 className="form-title">Select your plan</h1>
      <span className="form-description">You have the option monthly or yearly billing</span>
      <section className="plans-container">
      <div className={`${plan === 'arcade' ? 'plan selected' : 'plan'}`} onClick={() => selectPlan('arcade')}>
            {payment === 'yearly' && !isMobile ? <p className='plan-subtitle yearly'>2 months free</p> : null}

            {isMobile ? (
              <div className='plan-titles-mobile'>
                {payment === 'yearly' ? <p className='plan-subtitle yearly'>2 months free</p> : null}
                <p className='plan-subtitle'>{payment === 'monthly' ? '$9/mo' : '$90/yr'}</p>
                <p className='plan-title'>Arcade</p>
              </div>
            ) : (
              <>
                <p className='plan-subtitle'>{payment === 'monthly' ? '$9/mo' : '$90/yr'}</p>
                <p className='plan-title'>Arcade</p>
              </>
            )}
            <ArcadeLogo className='plan-logo' />
          </div>
          <div className={`${plan === 'advanced' ? 'plan selected' : 'plan'}`} onClick={() => selectPlan('advanced')}>
            {payment === 'yearly' && !isMobile ?  <p className='plan-subtitle yearly'>2 months free</p> : null}
            {isMobile ? (
              <div className='plan-titles-mobile'>
                {payment === 'yearly' ? <p className='plan-subtitle yearly'>2 months free</p> : null}
                <p className='plan-subtitle'>{payment === 'monthly' ? '$12/mo' : '$120/yr'}</p>
                <p className='plan-title'>Advanced</p>
              </div>
            ) : (
              <>
                <p className='plan-subtitle'>{payment === 'monthly' ? '$12/mo' : '$120/yr'}</p>
                <p className='plan-title'>Advanced</p>
              </>
            )}
            <AdvancedLogo className='plan-logo' />
          </div>
          <div className={`${plan === 'pro' ? 'plan selected' : 'plan'}`} onClick={() => selectPlan('pro')}>
            {payment === 'yearly' && !isMobile ? <p className='plan-subtitle yearly'>2 months free</p> : null}
            {isMobile ? (
              <div className='plan-titles-mobile'>
                {payment === 'yearly' ? <p className='plan-subtitle yearly'>2 months free</p> : null}
                <p className='plan-subtitle'>{payment === 'monthly' ? '$15/mo' : '$150/yr'}</p>
                <p className='plan-title'>Pro</p>
              </div>
            ) : (
              <>
                <p className='plan-subtitle'>{payment === 'monthly' ? '$15/mo' : '$150/yr'}</p>
                <p className='plan-title'>Pro</p>
              </>
            )}
            <ProLogo className='plan-logo' />
          </div>
      </section>
      <div className="plan payment">
        <span className='payment-title'>Monthly</span>
        <input className="toogle-check"type="checkbox" id="toogle" onChange={handlePayment}/>
        <label className='toogle-container' htmlFor="toogle">payment toogle</label>
        <span className='payment-title'>Yearly</span>
        </div>
        <NextStepComponent currentStep={currentStep} setCurrentStep={setCurrentStep} handleSubmit={handleSubmit} />
      </div>
    </>
  )
}
export default PlanComponent;