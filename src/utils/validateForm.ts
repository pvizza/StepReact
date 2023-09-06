interface FormValues {
  name: string;
  email: string;
  phone: string;
}

const validateForm = (formValues: FormValues) => {
  const nameRegex = /^[a-zA-Z\s]*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d+$/;

  let errors = {
    name: "",
    email: "",
    phone: "",
  };

  const { name, email, phone } = formValues;

  if (!name || !nameRegex.test(name)) {
    errors.name = "Please enter a valid name";
  }

  if (!email || !emailRegex.test(email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!phone || !phoneRegex.test(phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  return errors;
};

export default validateForm;