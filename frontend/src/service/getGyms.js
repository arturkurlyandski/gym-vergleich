export default function getGyms(){
     return fetch("http://gym.api/gyms")
           .then((res) => res.json())
           .then((data) => {return data})
  }
