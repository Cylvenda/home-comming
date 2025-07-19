import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../Context/StoreContextProvider'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Verify = () => {

    const { token } = useContext(StoreContext)
    const navigate = useNavigate()


    useEffect(() => {

        // if (token === '') {
        //     navigate('/')
        //     toast.error('Access denied, You have to Login')
        // }

    }, [])
}

export default Verify
