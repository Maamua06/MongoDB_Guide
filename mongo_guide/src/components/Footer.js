import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #333;
  padding: 20px;
  text-align: center;
  margin-top: 5%; /* Add 5% margin from the top */
`;

const Text = styled.p`
color: white;
background-color: #333;
`;

const Footer = () => {
    return ( 
        <FooterContainer>
            <Text>&copy; {new Date().getFullYear()} Lucario Kebab</Text>
        </FooterContainer>
     );
}
 
export default Footer;