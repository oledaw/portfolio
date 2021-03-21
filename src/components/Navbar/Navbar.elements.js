import styled from 'styled-components'
import { MdKeyboardCapslock } from 'react-icons/md'
import { Link } from 'react-scroll'
import { Container } from '../../globalStyles'

export const Nav = styled.nav`
background: #E7F2F4;
height: 90px;
display: flex;
justify-content: center;
position: sticky;
top: 0;
z-index: 999;
filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
`

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
background: #E7F2F4;
${Container}
`

export const NavLogo = styled(Link)`
color: #fff;
    justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`


export const NavIcon = styled(MdKeyboardCapslock)`
transform: rotate(90deg) scale(2);
background: #F8A88B;
`

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width: 992px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 3rem;
    cursor: pointer;
    color: #F8A88B;
}
`

export const NavMenu = styled.ul`
display: flex;
list-style: none;
align-items: center;
text-align: center;

@media screen and (max-width: 992px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 90px;
    left: ${({click})=>(click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #E7F2F4;
}

`

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover{
    border-bottom: 2px solid #F8A88B;
}

@media screen and (max-width: 990px){
    width: 100%;

    &:hover{
        border: none;
    }
}

`

export const NavLink = styled(Link)`
color: #000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;
cursor: pointer;

@media screen and (max-width: 990px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover{
        color: #F8A88B;
        transition: all 0.3s ease;
        
    }
}

`





