import React, { useContext } from 'react'
import './Dashboard.css'
import Navbar from '../../Components/Navbar/Navbar'
import Search from '../Components/Search/Search'
import { StoreContext } from '../../Components/Context/StoreContextProvider'

const Dashboard = () => {

      const {  nav, URL, bodySize } = useContext(StoreContext)

  return (
      <>
        <Navbar />
        <div className={'dashboard'} style={nav === "" ? bodySize : null} >
          <Search />
        </div>
    </>
  )
}

export default Dashboard
