import NextStepComponent from "../NextStepComponent/NextStepComponent";

const FormComponent = () => {
  return (
    <div style={{ flexGrow: '2' }}>
      <h1>Personal info</h1>
      <span>Please provide your name,email,address,and phone number.</span>
      <div style={{display:'flex'}}>
      <form style={{display: 'flex',flexDirection:'column'}}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.." />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email.." />
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" placeholder="Your address.." />
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" name="phone" placeholder="Your phone number.." />
        {/* <input type="submit" value="Submit" /> */}
      </form>
      </div>
      <NextStepComponent/>
    </div>
  );
}

export default FormComponent;