const formValidation = ({ values, setFormErrors }) => {
    let errors = {};
    let isValid = true;

    // Basic validation for demonstration
    if (!values.email) {
        errors.email = 'Email is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
        isValid = false;
    }

    if (!values.password) {
        errors.password = 'Password is required';
        isValid = false;
    } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
        isValid = false;
    }

    if (values.firstName === '') {
        errors.firstName = 'First Name is required';
        isValid = false;
    }

    if (values.lastName === '') {
        errors.lastName = 'Last Name is required';
        isValid = false;
    }

    if (values.phone === '') {
        errors.phone = 'Phone Number is required';
        isValid = false;
    } else if (values.phone && !/^\d{10,}$/.test(values.phone)) {
        errors.phone = 'Phone Number is invalid';
        isValid = false;
    }
    


    setFormErrors(errors);
    return isValid;
};

export default formValidation