import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavbarTitle = styled(Link)`

  float: left; /* Align links horizontally */
  display: block; /* Make links behave as blocks to fill the entire navbar */
  color: white; /* Text color of links */
  text-align: center; /* Center-align text */
  padding: 14px 16px; /* Padding around the links */
  text-decoration: none; /* Remove default underline */
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background-color: #ddd; /* Background color on hover */
    color: black; /* Text color on hover */
  }

  /* Add styles for active link if needed */
  &.active {
    background-color: #333; /* Background color of active link */
  }
`;

const Nav = styled.nav`
  background-color: #333; /* Background color of the navbar */
  overflow: hidden; /* Ensure any overflowing content is hidden */
  display: flex; /* Use Flexbox */
  justify-content: center; /* Center content horizontally */
`;

const Navbar = () => {
    return ( 
        <>
            <Nav>
                <NavbarTitle to={'/'} className="active" >MongoDB Guide</NavbarTitle>
            </Nav>
        </>
     );
}
 
export default Navbar;