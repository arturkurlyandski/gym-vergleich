import { useState, useEffect } from 'react'
import getGyms from './service/getGyms'
import styled from "styled-components"

export default function Home(){
    const [gyms, setGyms]  = useState([])
    useEffect(() => insertGyms(), [])

    async function insertGyms(){
        const gyms = await getGyms()
        setGyms(gyms)
    }

    let SortedGymsAlphabetAsc = gyms.sort((a,b) => (a.name > b.name) ? 1 : -1)
    let SortedGymsAlphabetDesc = gyms.sort((a,b) => (a.name < b.name) ? 1 : -1)

    let SortedGymsMonthlyPriceAsc = gyms.sort((a,b) => (a.monthlyPrice > b.monthlyPrice) ? 1 : -1)
    let SortedGymsMonthlyPriceDesc = gyms.sort((a,b) => (a.monthlyPrice > b.monthlyPrice) ? 1 : -1)

    let SaunaGyms = gyms.filter(gym => gym.sauna === true)



    const [search, setSearch] = useState(false)

    const SearchWrapper = styled.div`

        width: 90%;
        background-color: white;
        margin: auto;
        height: 200px;
        box-shadow: 0 0 30px 0px rgb(66, 75, 84, 0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    `

    const ButtonStyled = styled.button`
        
        background-color: #FD5B3F;
        width: 200px;
        height: 40px;
        box-shadow: 0 0 30px 0px rgb(66, 75, 84, 0.2);
        border-radius: 10px;
        `

    const GymCard = styled.div`

        background-color: white;
        margin: auto;
        width: 90%;
        box-shadow: 0 0 30px 0px rgb(66, 75, 84, 0.2);
        border-radius: 10px;
        font-family: "Roboto";
        `


    return (
        <div className="App">
        {!search &&<SearchWrapper>
        <ButtonStyled onClick={() => setSearch(true)}>Gyms vergleichen!</ButtonStyled>
        </SearchWrapper>}
        {search && SortedGymsMonthlyPriceAsc.map(({name, registrationFee, monthlyPrice}) =>(
            <GymCard>
            <p>{name}</p>
            <p>Anmeldegebühr: {registrationFee / Math.pow(10, 2)}</p>
            <p>Monatspreis: {monthlyPrice / Math.pow(10, 2)}</p>
            <p>Zum Anbieter: Link</p>
            </GymCard>
        ))}
        </div>
    )
}