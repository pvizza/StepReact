import { useContext, useEffect, useState } from 'react';
import NextStepComponent from '../NextStepComponent/NextStepComponent';
import './SummaryComponent.css';
import { PaymentContext } from '../../../context/paymetsContext';

const SumarryComponent = ({currentStep ,setCurrentStep}:PlanComponentProps) => {
  const readContext = useContext(PaymentContext);
  const {addons, planType, paymentType} = readContext;
  const [total, setTotal] = useState(0);
  console.log({readContext})

  const addonsOrder = ['online', 'larger', 'customizable'];

  useEffect(()=> {
      let newTotal = 0;
      if (planType === 'pro') {
        newTotal = paymentType === 'monthly' ? 15 : 150;
      }
      if (planType === 'advanced') {
        newTotal = paymentType === 'monthly' ? 12 : 120;
      }
      if (planType === 'arcade') {
        newTotal = paymentType === 'monthly' ? 9 : 90;
      }
      if (addons.includes('online')) {
        newTotal += paymentType === 'monthly' ? 1 : 10;
      }
      if (addons.includes('larger')) {
        newTotal += paymentType === 'monthly' ? 2 : 20;
      }
      if (addons.includes('customizable')) {
        newTotal += paymentType === 'monthly' ? 2 : 20;
      }
      setTotal(newTotal);

      addons.sort((a, b) => {
        return addonsOrder.indexOf(a) - addonsOrder.indexOf(b); });
  }
  , [planType, paymentType, addons]);

  const changePlan = () => {
    setCurrentStep(2);
  }
  const handleSubmit = () => {
    setCurrentStep(5);
  }

  return (
    <div className="form-container">
      <h1 className="form-title">Finishing up</h1>
      <span className="form-description">Double-check everything looks OK before confirming.</span>
      <section className="summary-container">
        <div className="summary">
          <div className="summary-type">
            <p className='summary-plan'>{planType} ({paymentType})</p>
            <p className='summary-plan-subtitle' onClick={changePlan} style={{cursor:'pointer' , textDecoration:'underline'}}>Change</p>
          </div>
          {
            planType === 'pro' ? 
              <p className='summary-plan-price'>{paymentType === 'monthly' ? '$15/mo' : '$150/yr'}</p> 
              : null
          }
          {
            planType === 'advanced' ? 
              <p className='summary-plan-price'>{paymentType === 'monthly' ? '$12/mo' : '$120/yr'}</p> 
              : null
          }
          {
            planType === 'arcade' ? 
              <p className='summary-plan-price'>{paymentType === 'monthly' ? '$9/mo' : '$90/yr'}</p> 
              : null
          }
        </div>
        <div className="summary">
  {addons.map((addon) => {
    switch (addon) {
      case 'online':
        return (
          <div className='summary-payments' key={addon}>
            <p className="summary-plan-subtitle">Online service</p>
            <p className="summary-addons-price">{paymentType === 'monthly' ? '+$1/mo' : '+$10/yr'}</p>
          </div>
        );
      case 'larger':
        return (
          <div className='summary-payments' key={addon}>
            <p className="summary-plan-subtitle">Larger Storage</p>
            <p className="summary-addons-price">{paymentType === 'monthly' ? '+$2/mo' : '+$20/yr'}</p>
          </div>
        );
      case 'customizable':
        return (
          <div className='summary-payments' key={addon}>
            <p className="summary-plan-subtitle">Customizable profile</p>
            <p className="summary-addons-price">{paymentType === 'monthly' ? '+$2/mo' : '+$20/yr'}</p>
          </div>
        );
      default:
        return null;
    }
  })}
</div>
        <div className="summary">
        <p className='summary-plan-subtitle'>{`Total(per ${paymentType === 'monthly' ? 'month' : 'year'})`}</p>
        <p className='summary-total-price'>{`$${total}/${paymentType === 'monthly' ? 'mo' : 'yr' }`}</p>
        </div>
      </section>
      <NextStepComponent currentStep={currentStep} setCurrentStep={setCurrentStep} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default SumarryComponent;