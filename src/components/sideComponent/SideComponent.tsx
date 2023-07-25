import './SideComponent.css';

const SideComponent = () => {
  return (
    <section className="side-component">
      <div className="grid-container">
        <div className="grid-item">
          <p className="step-number step-number-circle">1</p>
          <div>
            <span>step 1</span>
            <p>YOUR INFO</p>
          </div>
        </div>
        <div className="grid-item">
          <p className="step-number step-number-circle">2</p>
          <div>
            <span>step 2</span>
            <p>SELECT PLAN</p>
          </div>
        </div>
        <div className="grid-item">
          <p className="step-number step-number-circle">3</p>
          <div>
            <span>step 3</span>
            <p>ADD ONSs</p>
          </div>
        </div>
        <div className="grid-item">
          <p className="step-number step-number-circle">4</p>
          <div>
            <span>step 4</span>
            <p>SUMMARY</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideComponent;