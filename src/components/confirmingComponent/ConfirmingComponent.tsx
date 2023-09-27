import './ConfirmingComponent.css';
import { ReactComponent as ThanksLogo } from "../../assets/icon-thank-you copy.svg";

const ConfirmingComponent: React.FC = () => {


  return (
    <div className='form-container step5'>
    <ThanksLogo/>
    <h2 className='confirm-title'>Thank you!</h2>
    <p className='confirm-text'>Thanks for confirming your susbcription! We hope you have fun using
      our platform. If you ever need support, please feel free to email us at support@loregaming.com
    </p>
    </div>
  );
};

export default ConfirmingComponent;
