import React, { useContext } from 'react'
import './Search.css'
import { StoreContext } from '../../../Components/Context/StoreContextProvider'

const Search = () => {

    const { nav, bodySize } = useContext(StoreContext);
    const location = [
        {id: '1', name: 'Ubungo'},
        {id: '2', name: 'Ilala'},
        {id: '3', name: 'Kinondoni'},
        {id: '4', name: 'Temeke'},
        {id: '5', name: 'Kigamboni'},
    ]

  return (
    <>
        <div className="search-container" style={nav === "" ? bodySize : null}>
            
        </div>
    </>
  )
}

export default Search