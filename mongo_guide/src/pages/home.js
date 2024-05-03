import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Video from "../videos/Abubakar Ahmed's Video - 2. mai 2024.mp4";

import styled from 'styled-components';

const Text = styled.p`
background-color: white;
`;

const Bold = styled.b`
background-color: white;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="background">
          <video height="500px" width="800px" controls className="video">
            <source src={Video} type="video/mp4" />
          </video>


        <div className="container top">
          <Text>Gå Inn i terminalen på din VM</Text>
        </div>

        <div className="container">
          <Text>Skriv <Bold>sudo apt-get install gnupg curl</Bold> og press enter</Text>
        </div>

        <div className="container">
          <Text>Skriv <Bold>curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor</Bold> og press enter</Text>
        </div>

        <div className="container">
          <Text>Deretter skriv <Bold>echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list</Bold> og press enter</Text>
        </div>

        <div className="container">
          <Text>Så skriver du <Bold>sudo apt-get update
</Bold> og press enter</Text>
        </div>

        <div className="container">
          <Text>Også skriv <Bold>sudo apt-get install -y mongodb-org</Bold> deretter press enter</Text>
        </div>

        <div className="container">
          <Text>Når den lilla boksen popper opp <Bold>press enter</Bold> og gå videre</Text>
        </div>

        <div className="container">
          <Text>Når den er ferdig instalert skriv <Bold>mongosh og press enter</Bold></Text>
        </div>

        <div className="container">
          <Text>For å konfigurere serveren riktig skriv <Bold>cd /etc og press enter</Bold> deretter skriver du <Bold>ls og finner mongod.conf filen</Bold></Text>
        </div>

        <div className="container">
          <Text>Når du har funnet filen skriv <Bold>sudo nano mongod.conf</Bold> deretter fin der det står bindIP og endre ip addressen til IPen til din VM</Text>
        </div>

        <div className="container">
          <Text>Press <Bold>ctrl x også y og enter for å gå ut av filen</Bold> skriv nå <Bold>sudo systemctl retsart mongod</Bold> og press enter</Text>
        </div>

        <div className="container">
          <Text>Skriv <Bold>cd .. </Bold>for å navigere tilbake til hjemmappen din</Text>
        </div>

        <div className="container">
          <Text>Skriv mongosh og IPen til din VM og nå er din mongodb server satt opp</Text>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Home;

