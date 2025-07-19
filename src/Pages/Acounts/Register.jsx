import React, { useContext, useState } from 'react'
import './Login.css'
import formValidation from './validation';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Components/Context/StoreContextProvider';
import Footer from '../../Components/Footer/Footer';
import { assets } from '../../assets/assets';

const Register = () => {

    const { setToken, URL, loadUser, formCondition, } = useContext(StoreContext);
    const navigate = useNavigate()
    const [formErrors, setFormErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',

    });

    const handleInputs = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(formData => ({ ...formData, [name]: value }))

        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };



    const formHandler = async (event) => {
        event.preventDefault();
        setFormErrors({});

        const isValid = formValidation({ values: formData, setFormErrors, formCondition });


        if (!isValid) {
            console.log("Form does not meet the requirements.");
            return; // Stop if validation fails
        }

        setIsLoading(true); // Show loading spinner

        let currentUrl = URL;
        currentUrl += 'user/register';

        try {
            const response = await axios.post(currentUrl, formData);

            if (response.data.success) {
                setToken(response.data.token)
                localStorage.setItem("token", response.data.token); // Store token
                toast.success("Registration successful!");
                loadUser(response.data.token)
                navigate('/Dashboard') //navigate user to dashboard
            } else {
                toast.error(response.data.message || "Authentication failed");
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred. Please try again. here]";
            toast.error(errorMessage);
            console.error("Authentication error:", error);

        } finally {
            // console.log(token)
            setIsLoading(false); // Hide loading spinner
        }


    };

    return (
        <>
            <div className='Login-container'>
                <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="form-container">
                    <div className="form-header">
                        <h3>Register To Home Comming</h3>
                    </div>
                    <form onSubmit={formHandler}>

                        <div className="input-flex">
                            <div className="form-content">
                                <label htmlFor="fname">First Name:</label>
                                <input type="text" name='firstName' onChange={handleInputs} placeholder='Enter Your First Name..' />
                                {formErrors.firstName ? <span>{formErrors.firstName}</span> : ''}
                            </div>

                            <div className="form-content">
                                <label htmlFor="fname">Last Name:</label>
                                <input type="text" name='lastName' onChange={handleInputs} placeholder='Enter Your First Name..' />
                                {formErrors.lastName ? <span>{formErrors.lastName}</span> : ''}
                            </div>
                        </div>

                        <div className="input-flex">
                            <div className="form-content">
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" onChange={handleInputs} placeholder='Enter Your Email..' />
                                {formErrors.email ? <span>{formErrors.email}</span> : ''}
                            </div>


                            <div className="form-content">
                                <label htmlFor="phone">Phone Number:</label>
                                <input type="tel" name="phone" onChange={handleInputs} placeholder='Enter Your Phone Number [0780....]' />
                                {formErrors.phone ? <span>{formErrors.phone}</span> : ''}
                            </div>
                        </div>
                        <div className="form-content">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" onChange={handleInputs} placeholder='Enter Your Password' />
                            {formErrors.password ? <span>{formErrors.password}</span> : ''}
                        </div>

                        <button type="submit" disabled={isLoading}>
                            {isLoading ? <div className="spinner"></div> : 'Register'}
                        </button>

                        <div className="social">
                            <img src={assets.apple} width={50} alt="" /> <img className='google' src={assets.google} width={50} alt="" />
                        </div>

                        <div className="sign-up">
                            <span onClick={() => navigate('/Login')} >Already have an acoount ? <span onClick={() => navigate('/Login')} className='red'>Login</span></span>
                        </div>

                    </form>
                </div>
            </div>

            <div className="footer-set">
                <Footer />
            </div>

        </>

    )
}

export default Register
