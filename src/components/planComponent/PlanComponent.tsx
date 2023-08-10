const PlanComponent = () => {
  return(
    <>
    <div className="form-container">
    <h1 className="form-title">Select your plan</h1>
      <span className="form-description">You have the option monthly or yearly billing</span>
      <section className="plans-container">
        <div className="plan">
          <p>Arcade</p>
          </div>
        <div className="plan">
        <p>Advanced</p>
           </div>
        <div className="plan">  
        <p>Pro</p>
         </div>
        <div className="plan payment">
          <span>Monthly</span>
          <span>Yearly</span>
        </div>
      </section>
      </div>
    </>
  )
}
export default PlanComponent;