import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../App.css';

import styled from 'styled-components';
import { Link } from "react-router-dom";

const Text = styled.p`
background-color: white;
margin-left: 5%;
margin-right: 5%;
`;

const Bold = styled.b`
background-color: white;
`;

const List = styled.ol`
background-color: white;
margin-right: 5%;
`;

const ListItem = styled.li`
background-color: white;
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px 20px; /* Reduced padding to make button smaller */
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px; /* Reduced font size */
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 5%;
  margin-right: 5%;
  margin-bottom: -5%;
`;

const Url = styled(Link)`
text-decoration: none;
color: inherit;
background-color: black;
`;

const Innhold = () => {
    return ( 
        <>
            <Navbar />
            <div className="background2">
                <Text className="Top"><Bold>Velkommen til min Guid på hvordan man setter opp en MongoDB server</Bold></Text>
                <Text><Bold>For å komme i gang, må du først ha en maskin å jobbe med. I videoen ovenfor brukes en Linux-maskin, spesifikt Ubuntu. Følg enten videoen eller den skriftlige guiden.</Bold></Text>
                <Text><Bold>Det du trenger:</Bold></Text>
                <List>
                    <ListItem>
                        En Linux Datamaskin
                    </ListItem>

                    <br />

                    <ListItem>
                        En VM Server
                    </ListItem>

                    <br />

                    <ListItem>
                        Tilgang på internett
                    </ListItem>

                    <br />

                    <ListItem>
                        Tastatur
                    </ListItem>

                </List>

                <Button><Url to='/home'>Til Guiden</Url></Button>
                
            </div>

            <Footer />
        </>
     );
}
 
export default Innhold;