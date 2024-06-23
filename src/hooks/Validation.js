import { useState } from "react";


const Validation = () => {
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    let tempErrors = {};

    if (!values.name) {
      tempErrors.name = "Name is required";
    }

    if (!values.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      tempErrors.email = "Email is not valid";
    }

    if (!values.age) {
      tempErrors.age = "Age is required";
    } else if (isNaN(values.age) || values.age <= 0) {
      tempErrors.age = "Age must be a number greater than 0";
    }

    if (!values.attendingWithGuest) {
      tempErrors.attendingWithGuest = "This field is required";
    }

    if (values.attendingWithGuest === "Yes" && !values.guestName) {
      tempErrors.guestName = "Guest name is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return {
    errors,
    validate,
  };
};

export default Validation;
