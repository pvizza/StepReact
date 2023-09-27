import './SideComponent.css';

type SideComponentProps = { currentStep: number };

const SideComponent = ({currentStep}:SideComponentProps) => {
  return (
    <section className="side-component">
      <div className="grid-container">
        <div className="grid-item">
          <p className={currentStep === 1 ? "step-number step-number-circle active" : "step-number step-number-circle"}>1</p>
          <div>
            <span className='step-title'>STEP 1</span>
            <p className='step-description'>YOUR INFO</p>
          </div>
        </div>
        <div className="grid-item">
          <p className={currentStep === 2 ? "step-number step-number-circle active" : "step-number step-number-circle"}>2</p>
          <div>
            <span className='step-title'>STEP 2</span>
            <p className='step-description'>SELECT PLAN</p>
          </div>
        </div>
        <div className="grid-item">
          <p  className={currentStep === 3 ? "step-number step-number-circle active" : "step-number step-number-circle"}>3</p>
          <div>
            <span className='step-title'>STEP 3</span>
            <p className='step-description'>ADD-ONS</p>
          </div>
        </div>
        <div className="grid-item">
          <p className={currentStep === 4 || currentStep === 5 ? "step-number step-number-circle active" : "step-number step-number-circle"}>4</p>
          <div>
            <span className='step-title'>STEP 4</span>
            <p className='step-description'>SUMMARY</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideComponent;