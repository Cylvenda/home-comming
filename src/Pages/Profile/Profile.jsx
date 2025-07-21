import React from 'react'
import './Profile.css'
import { useContext } from 'react'
import { useState } from 'react'
import { StoreContext } from '../../Components/Context/StoreContextProvider'
import { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Navbar from '../../Components/Navbar/Navbar'
import { ArrowLeft } from 'lucide-react'

const Profile = () => {

    const [formErrors, setFormErrors] = useState({})
    const [passErrors, setPassErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const { userData, setUserData, nav, URL, bodySize } = useContext(StoreContext)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const [passData, setPassData] = useState({
        oldPassword: '',
        newPassword: '',
        comfirmNewPassword: '',
    })

    useEffect(() => {
        if (userData) {
            setFormData({
                firstName: userData.firstName || '',
                lastName: userData.lastName || '',
                email: userData.email || '',
                phone: userData.phone || ''
            });
        }
    }, [userData]);

    const handleInputs = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handlePassword = (event) => {
        const { name, value } = event.target;
        setPassData(prev => ({ ...prev, [name]: value }))

        if (passErrors[name]) {
            setPassErrors(prev => ({ ...prev, [name]: '' }));
        }
    }

    const validateForm = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(07|06)\d{8}$/;

        if (!formData.firstName.trim()) errors.firstName = 'First name is required';
        if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
        if (!formData.email.trim()) errors.email = 'Email is required';
        else if (!emailRegex.test(formData.email)) errors.email = 'Invalid email format';
        if (!formData.phone.trim()) errors.phone = 'Phone number is required';
        else if (!phoneRegex.test(formData.phone)) errors.phone = 'Invalid phone (e.g. 07.. OR 06..)';

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const validatePass = () => {
        const errors = {};

        if (!passData.oldPassword) errors.oldPassword = 'Old Password is required';
        if (!passData.newPassword) errors.newPassword = 'New Password is required';
        else if (passData.newPassword.length < 6) errors.newPassword = 'Your new Password is too short';
        if (!passData.comfirmNewPassword) errors.comfirmNewPassword = 'You have to repeate your new password Here';
        else if (passData.newPassword !== passData.comfirmNewPassword) errors.comfirmNewPassword = 'Your new password must match'


        setPassErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const formHandler = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Please fix the errors before submitting');
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.put(URL + 'user/updates', formData, { headers: { token: localStorage.getItem("token") } });
            toast.success('Profile updated successfully');
            setUserData(response.data.user);

        } catch (error) {
            console.error('Update failed:', error);
            toast.error('Update failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const passHandler = async (e) => {
        e.preventDefault()

        if (!validatePass()) {
            toast.error('Please Check the inputs fields for fixing errors');
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.put(URL + 'user/changePass', passData, { headers: { token: localStorage.getItem("token") } });
            toast.success(response.message);

        } catch (error) {
            console.error('Update failed:', error);
            toast.error('Update failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }



    return (
        <>
            <Navbar />

            <div className="profile-container" style={nav === "" ? bodySize : null} >
                <div className="link">
                    <span >Dashboard </span> / <span > Profile </span>
                </div>

                <div className="forms-container">
                    <div className="form-details">
                        <h3>Update User Details</h3>
                        <form onSubmit={formHandler}>
                            <div className="user-inputs">
                                <div className="form-content">
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" name='firstName' value={formData.firstName || ""} onChange={handleInputs} placeholder='Enter Your First Name..' />
                                    {formErrors.firstName ? <span>{formErrors.firstName}</span> : ''}
                                </div>

                                <div className="form-content">
                                    <label htmlFor="fname">Last Name</label>
                                    <input type="text" name='lastName' value={formData.lastName || ""} onChange={handleInputs} placeholder='Enter Your First Name..' />
                                    {formErrors.lastName ? <span>{formErrors.lastName}</span> : ''}
                                </div>

                                <div className="form-content">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" value={formData.email || ""} onChange={handleInputs} placeholder='Enter Your Email..' />
                                    {formErrors.email ? <span>{formErrors.email}</span> : ''}
                                </div>

                                <div className="form-content">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" name="phone" value={formData.phone || ""} onChange={handleInputs} placeholder='Enter Your Phone Number [0780....]' />
                                    {formErrors.phone ? <span>{formErrors.phone}</span> : ''}
                                </div>

                            </div>

                            <div className="button">
                                <button type="submit" disabled={isLoading}>
                                    {isLoading ? <div className="spinner"></div> : 'Update'}
                                </button>
                            </div>

                        </form>
                    </div>

                    <hr />

                    <div className="form-password">
                        <h3>Change Password</h3>
                        <form onSubmit={passHandler}>
                            <div className="user-inputs">
                                <div className="form-content">
                                    <label htmlFor="fname">Old Password:</label>
                                    <input type="password" name='oldPassword' onChange={handlePassword} placeholder='Enter Your Old Password' />
                                    {passErrors.oldPassword ? <span>{passErrors.oldPassword}</span> : ''}
                                </div>

                                <div className="form-content">
                                    <label htmlFor="fname">New Password:</label>
                                    <input type="password" name='newPassword' onChange={handlePassword} placeholder='Enter Your New Password' />
                                    {passErrors.newPassword ? <span>{passErrors.newPassword}</span> : ''}
                                </div>

                                <div className="form-content">
                                    <label htmlFor="email">Comfirm New Password:</label>
                                    <input type="password" name="comfirmNewPassword" onChange={handlePassword} placeholder='Comfirm Your New Password' />
                                    {passErrors.comfirmNewPassword ? <span>{passErrors.comfirmNewPassword}</span> : ''}
                                </div>


                            </div>

                            <div className="button">
                                <button type="submit" disabled={isLoading}>
                                    {isLoading ? <div className="spinner"></div> : 'Change Password'}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile
