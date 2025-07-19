import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../Context/StoreContextProvider'
import { useNavigate } from 'react-router-dom'
import { Activity, DollarSign, Home, LayoutDashboard, MessageSquareReply, PersonStanding, SeparatorVertical } from 'lucide-react'

const Navbar = () => {
  const { nav, userData } = useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <>
      <nav className={nav}>
        <div onClick={() => navigate('/Profile')} className="user">
          <span className='user-img'><img src={assets.joker01} width={70} height={70} /></span>
          <h3>
            {userData.lastName === undefined ? "User" : userData.firstName + " " + userData.lastName}
          </h3>
        </div>
        <ul>
          <li onClick={() => navigate('/')} ><Home /><span>Home</span></li>
          <li onClick={() => navigate('/Dashboard')} ><LayoutDashboard /><span>Dashboard</span></li>
          <li><Activity /><span>Applications</span></li>
          <li><PersonStanding /><span>Pendings</span></li>
          <li><SeparatorVertical/><span>Services</span></li>
          <li><DollarSign /><span>Pricing</span></li>
          <li><MessageSquareReply /><span><strong>FAQ's</strong></span></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
