import { INVALID_EMAIL_ERROR, INVALID_NAME_ERROR, INVALID_PHONE_ERROR, REQUIRED_FIELD_ERROR } from "../messagesStrings";

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
    errors.name = name ? INVALID_NAME_ERROR : REQUIRED_FIELD_ERROR;
  }

  if (!email || !emailRegex.test(email)) {
    errors.email = email ? INVALID_EMAIL_ERROR : REQUIRED_FIELD_ERROR;
  }

  if (!phone || !phoneRegex.test(phone)) {
    errors.phone = phone ? INVALID_PHONE_ERROR : REQUIRED_FIELD_ERROR;
  }

  return errors;
};

export default validateForm;