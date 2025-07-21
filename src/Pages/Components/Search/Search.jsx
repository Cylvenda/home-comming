import React from 'react'
import './Search.css'
import { StoreContext } from '../../../Components/Context/StoreContextProvider'

const Search = () => {

  const districts = [
    { id: '1', name: 'Kinondoni ' },
    { id: '2', name: 'Ilala' },
    { id: '3', name: 'Temeke' },
    { id: '4', name: 'Ubungo' },
    { id: '5', name: 'Kigamboni' },
  ]

  const wards = [
    // Kinondoni - ID: 1
    { id: 1, name: "Bunju" },
    { id: 1, name: "Hananasif" },
    { id: 1, name: "Kawe" },
    { id: 1, name: "Kigogo" },
    { id: 1, name: "Kijitonyama" },
    { id: 1, name: "Kinondoni" },
    { id: 1, name: "Kunduchi" },
    { id: 1, name: "Mabwepande" },
    { id: 1, name: "Magomeni" },
    { id: 1, name: "Makongo" },
    { id: 1, name: "Makumbusho" },
    { id: 1, name: "Mbezi Juu" },
    { id: 1, name: "Mbweni" },
    { id: 1, name: "Mikocheni" },
    { id: 1, name: "Msasani" },
    { id: 1, name: "Mwananyamala" },
    { id: 1, name: "Mzimuni" },
    { id: 1, name: "Ndugumbi" },
    { id: 1, name: "Tandale" },
    { id: 1, name: "Wazo" },

    // Ilala - ID: 2
    { id: 2, name: "Bonyokwa" },
    { id: 2, name: "Buguruni" },
    { id: 2, name: "Buyuni" },
    { id: 2, name: "Chanika" },
    { id: 2, name: "Gerezani" },
    { id: 2, name: "Gongolamboto" },
    { id: 2, name: "Ilala" },
    { id: 2, name: "Jangwani" },
    { id: 2, name: "Liwiti" },
    { id: 2, name: "Kariakoo" },
    { id: 2, name: "Kimanga" },
    { id: 2, name: "Kinyerezi" },
    { id: 2, name: "Kipawa" },
    { id: 2, name: "Kipunguni" },
    { id: 2, name: "Kisukuru" },
    { id: 2, name: "Kitunda" },
    { id: 2, name: "Kisutu" },
    { id: 2, name: "Kivukoni" },
    { id: 2, name: "Kivule" },
    { id: 2, name: "Kiwalani" },
    { id: 2, name: "Majohe" },
    { id: 2, name: "Mchafukoge" },
    { id: 2, name: "Mchikichini" },
    { id: 2, name: "Minazi Mirefu" },
    { id: 2, name: "Mnyamani" },
    { id: 2, name: "Msongola" },
    { id: 2, name: "Mzinga" },
    { id: 2, name: "Pugu" },
    { id: 2, name: "Pugu Station" },
    { id: 2, name: "Segerea" },
    { id: 2, name: "Tabata" },
    { id: 2, name: "Ukonga" },
    { id: 2, name: "Upanga East" },
    { id: 2, name: "Upanga West" },
    { id: 2, name: "Vingunguti" },
    { id: 2, name: "Zingiziwa" },

    // Temeke - ID: 3
    { id: 3, name: "Azimio" },
    { id: 3, name: "Buza" },
    { id: 3, name: "Chamazi" },
    { id: 3, name: "Chang’ombe" },
    { id: 3, name: "Charambe" },
    { id: 3, name: "Keko" },
    { id: 3, name: "Kiburugwa" },
    { id: 3, name: "Kijichi" },
    { id: 3, name: "Kilakala" },
    { id: 3, name: "Kurasini" },
    { id: 3, name: "Makangarawe" },
    { id: 3, name: "Mbagala" },
    { id: 3, name: "Mbagala Kuu" },
    { id: 3, name: "Mianzini" },
    { id: 3, name: "Miburani" },
    { id: 3, name: "Mtoni" },
    { id: 3, name: "Sandali" },
    { id: 3, name: "Tandika" },
    { id: 3, name: "Temeke" },
    { id: 3, name: "Toangoma" },
    { id: 3, name: "Yombo Vituka" },

    // Ubungo - ID: 4
    { id: 4, name: "Goba" },
    { id: 4, name: "Kimara" },
    { id: 4, name: "Kibamba" },
    { id: 4, name: "Kwembe" },
    { id: 4, name: "Msigani" },
    { id: 4, name: "Mburahati" },
    { id: 4, name: "Makuburi" },
    { id: 4, name: "Manzese" },
    { id: 4, name: "Sinza" },
    { id: 4, name: "Ubungo" },
    { id: 4, name: "Makoka" },
    { id: 4, name: "Saranga" },
    { id: 4, name: "Mwananyamala" },
    { id: 4, name: "Kijitonyama" },

    // Kigamboni - ID: 5
    { id: 5, name: "Kigamboni" },
    { id: 5, name: "Kibada" },
    { id: 5, name: "Mjimwema" },
    { id: 5, name: "Kisarawe II" },
    { id: 5, name: "Vijibweni" },
    { id: 5, name: "Somangila" },
    { id: 5, name: "Kimbiji" },
    { id: 5, name: "Pembamnazi" },
    { id: 5, name: "Tungi" }
  ];


  return (
    <>
      <div className="search-container">
        <div className="search">
        <form>
          <h3>Select Your Starting Location</h3>
          <select name="district" >
            {districts.map((dis) => (
              <>
                <option >Select A district</option>
                <option key={dis.id} value={dis.id}>{dis.name}</option>
              </>
            ))}
          </select>
        </form>
        </div>
      </div>
    </>
  )
}

export default Search