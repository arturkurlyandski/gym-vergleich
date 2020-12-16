import styled from "styled-components"

export default function Header() {

    const Headline = styled.p`
        font-family: "Montserrat";
        font-size: 35px;
        text-align: center;
        color: #FD5B3F;
        margin: 20px;
    `

    return (
    <div>
        <Headline>Gym-Vergleich</Headline>
    </div>
    )
}