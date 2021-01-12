import { useState, useEffect } from 'react'
import getGyms from './service/getGyms'
import styled from "styled-components"
import DropDown from "./Dropdown"
import GymCard from "./GymCard"

export default function Home(){
    const [gyms, setGyms]  = useState([])
    useEffect(() => insertGyms(), [])

    async function insertGyms(){
        const gyms = await getGyms()
        setGyms(gyms)
    }

    const [search, setSearch] = useState(false)

    const SearchWrapper = styled.div`

        width: 90%;
        background-color: white;
        margin: auto;
        height: auto;
        box-shadow: 0 0 30px 0px rgb(66, 75, 84, 0.2);
        display: flex;
        flex-wrap: wrap;
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
        border-style: none;
        color: #E9E9E9;
        margin-bottom: 20px;
        `
    
    const ButtonStyledBack = styled.button`
        
        background-color: #FD5B3F;
        width: 200px;
        height: 40px;
        box-shadow: 0 0 30px 0px rgb(66, 75, 84, 0.2);
        border-radius: 10px;
        border-style: none;
        color: #E9E9E9;
        margin-left: 85px;
        `


    return (
        <div className="App">
        {!search &&<SearchWrapper>
        <DropDown />
        <ButtonStyled onClick={() => setSearch(true)}>Gyms vergleichen!</ButtonStyled>
        </SearchWrapper>}
        {search && 
            <>
            <GymCard gyms={gyms} />
            <ButtonStyledBack onClick={() => setSearch(false)}>Back</ButtonStyledBack>
            </> 
         }
        
        
        </div>
    )
}