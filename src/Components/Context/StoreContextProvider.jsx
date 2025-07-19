import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const URL = "http://localhost:5070/api/";

    const [token, setToken] = useState("");
    const [userData, setUserData] = useState({});
    const [nav, setNav] = useState("hide-nav")
    const [subMenu, setSubMenu] = useState(false)

    const bodySize = {
        marginLeft: '200px',
        transition: '1s ease'
    }


    const loadUser = async (token) => {

        const response = await axios.post(URL + "user/details", {}, { headers: { token } });

        setUserData(response.data.userData)
    }

    useEffect(() => {

        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
            loadUser(localStorage.getItem("token"))
        }

    }, []);

    const contextValue = {

        token,
        setToken,
        URL,
        userData,
        setUserData,
        nav,
        setNav,
        subMenu,
        setSubMenu,
        loadUser,
        bodySize
    }

    return (
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
