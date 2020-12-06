
import { useState, useEffect } from 'react'
import getGyms from './service/getGyms'

function App() {

  const [gyms, setGyms]  = useState([])
  useEffect(() => getGyms(), [])

  function getGyms(){
    fetch("http://gym.api/gyms")
           .then((res) => res.json())
           .then((data) => setGyms(data))
  }

  const [search, setSearch] = useState(false)


  return (
    <div className="App">
      {!search &&<button onClick={() => setSearch(true)}>Suche</button>}
      {search && gyms.map(({name, registrationFee, monthlyPrice}) =>(
        <div>
        <p>{name}</p>
        <p>{registrationFee}</p>
        <p>{monthlyPrice}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
