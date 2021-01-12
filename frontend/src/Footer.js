import { NavLink } from "react-router-dom"; 
import styled from "styled-components/macro"
import { MdAccountCircle, MdTurnedIn, MdHome } from "react-icons/md"

export default function Header () {

    const NavLinkStyled = styled(NavLink)`
        color : black;
        padding: 10px;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-size: 40px;

        &.active {
            color: #FD5B3F;
        }
    `
    const NavBarStyled = styled.nav`
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: white;
        margin: 0px;
        padding: 2px 0px;
        border: solid 1px gray;
        box-shadow: 0 0 30px 0px rgb(66, 75, 84, 0.2);
    `

    return (
        <footer>
        <NavBarStyled>
            <NavLinkStyled to="/profile" activeClassName="active"><MdAccountCircle /></NavLinkStyled>
            <NavLinkStyled exact to="/" activeClassName="active"><MdHome /></NavLinkStyled>
            <NavLinkStyled to="/bookmarks" activeClassName="active"><MdTurnedIn /></NavLinkStyled>
        </NavBarStyled>
        </footer> 
    )
}