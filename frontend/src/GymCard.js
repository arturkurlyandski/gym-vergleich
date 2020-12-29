import styled from "styled-components"
import { MdDone, MdTurnedInNot } from "react-icons/md"

export default function GymCard ({gyms}) {

    const Name = styled.p`

        font-weight: 600;
        padding: 15px;

    `

    const MonthlyPrice = styled.p`

            
            margin-left: 15px;
            padding-bottom: 15px;

        `

    const RegistrationFee = styled.p`

            margin-top: 25px;
            margin-left: 15px;
            margin-bottom: 10px;

    `

    const Wellness = styled.p`

                
            margin-left: 15px;
            margin-bottom: 10px;
            color: green;

    `

    const Parking = styled.p`

                    
            margin-left: 15px;
            margin-bottom: 10px;
            color: green;

    `

    const ChildCare = styled.p`

                    
            margin-left: 15px;
            margin-bottom: 10px;
            color: green;

        `

    const PersonalTraining = styled.p`

                        
            margin-left: 15px;
            margin-bottom: 10px;
            color: green;

    `

    const ButtonStyled = styled.button`
        
        background-color: #FD5B3F;
        width: auto;
        height: 40px;
        box-shadow: 0 0 30px 0px rgb(66, 75, 84, 0.2);
        border-radius: 10px;
        border-style: none;
        color: #E9E9E9;
        position: absolute;
        bottom: 8px;
        right: 8px;
        `

    const GymCard = styled.div`

        position: relative;
        background-color: white;
        margin: auto;
        width: 90%;
        box-shadow: 0 0 30px 0px rgb(66, 75, 84, 0.2);
        border-radius: 10px;
        font-family: "Roboto";

        `

    const ButtonBookmark = styled.div`

        position: absolute;
        right: 8px;
        top: 8px;
        font-size: 35px;
        color: #FD5B3F;

        `

    return (
        gyms.map(({name, registrationFee, monthlyPrice, wellness, parking, childCare, personalTraining}) =>(
            <GymCard>
            <Name>{name}</Name>
            <ButtonBookmark><MdTurnedInNot /></ButtonBookmark>
            {wellness && <Wellness><MdDone /> Wellness</Wellness>}
            {parking && <Parking><MdDone /> Parkmöglichkeit</Parking>}
            {childCare&& <ChildCare><MdDone /> Kinderbetreuung</ChildCare>}
            {personalTraining && <PersonalTraining><MdDone /> Personal Training</PersonalTraining>}
            <RegistrationFee>Anmeldegebühr: <span style={{color: "red"}}>{registrationFee / Math.pow(10, 2)}€</span></RegistrationFee>
            <MonthlyPrice>Monatspreis: <span style={{color: "red"}}>{monthlyPrice / Math.pow(10, 2)}€</span></MonthlyPrice>
            <ButtonStyled>Zum Anbieter</ButtonStyled>
            </GymCard>
            )) 
    )


}
