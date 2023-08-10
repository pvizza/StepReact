import './planComponent.css';
import { ReactComponent as AdvancedLogo } from "../../assets/icon-advanced.svg";
import { ReactComponent as ArcadeLogo} from "../../assets/icon-arcade.svg"
import { ReactComponent as ProLogo} from "../../assets/icon-pro.svg"


const PlanComponent = () => {
  return(
    <>
    <div className="form-container">
    <h1 className="form-title">Select your plan</h1>
      <span className="form-description">You have the option monthly or yearly billing</span>
      <section className="plans-container">
        <div className="plan">
          <p>Arcade</p>
          <ArcadeLogo/>
          </div>
        <div className="plan">
        <p>Advanced</p>
        <AdvancedLogo/>
           </div>
        <div className="plan">  
        <p>Pro</p>
        <ProLogo/>
         </div>
       
      </section>
      <div className="plan payment">
          <span>Monthly</span>
          <span>Yearly</span>
        </div>
      </div>
    </>
  )
}
export default PlanComponent;