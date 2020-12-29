import styled from "styled-components"

export default function Header() {

    const Headline = styled.p`
        font-family: "Oswald", sans-serif;
        font-style: italic;
        text-transform: uppercase;
        font-size: 35px;
        text-align: center;
        color: #FD5B3F;
        margin: 50px 25px;
        text-shadow: 0 0 30px rgb(66, 75, 84, 0.4);
    `

    return (
    <div>
        <Headline>Find-my-Gym</Headline>
    </div>
    )
}