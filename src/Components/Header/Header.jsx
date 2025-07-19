import React, { useContext } from 'react'
import './header.css'
import { StoreContext } from '../Context/StoreContextProvider'
import { useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify'
import { LogOutIcon, Menu, ShieldClose, StampIcon, User, User2 } from 'lucide-react'


const Header = ({ setShowForm }) => {

    const { token, setToken, nav, setNav, subMenu, setSubMenu } = useContext(StoreContext)
    const navigate = useNavigate()

    const handlelogout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate('/')
        toast.info('You have Logged out successfully.')
    }

    const addSubMenu =
        <div className="sub-menu" data-aos="flip-right" data-aos-duration="1500">
            <ul>
                <li><span onClick={() => navigate('/Profile')}><User />Profile</span></li>
                <li><span><StampIcon />Change Password</span></li>
                <li><span onClick={handlelogout}><LogOutIcon />Logout</span></li>
            </ul>
        </div>

    return (
        <>
            <header className={!token === '' ? 'header' : ''}>
                <div className="brand">
                    <span onClick={() => navigate('/Dashboard')}>Home Coming</span>
                </div>

                {token ?
                    <div className="button">
                        {nav === "hide-nav" ? <span onClick={() => setNav("")}><Menu  /></span> :
                            <span onClick={() => setNav("hide-nav")}><Menu /></span>}

                        <div className="menus">
                            {subMenu ? <span onClick={() => setSubMenu(false)} ><ShieldClose /></span> :
                                <span onClick={() => setSubMenu(true)} ><User2 /></span>}
                        </div>
                    </div> :
                    <div className="button">
                        <span onClick={() => setShowForm(true)}>Login</span>
                        <span  onClick={() => navigate('/Register')}> <button className='register' type="button">Register</button> </span>
                    </div>
                }


            </header>

            {subMenu ? addSubMenu : <> </>}
        </>
    )
}

export default Header