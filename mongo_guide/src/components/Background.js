import styled from "styled-components";

import Page from './PageComponent';

const PageBackgroundContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 5% auto 0; /* Center the background horizontally and add 5% margin from the top */
  min-height: 90vh; /* Adjusted the height to ensure it covers most of the viewport */
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
`;

const BackgroundPage = () => {
    return ( 
        <PageBackgroundContainer color="#f0f0f0">
          <Page>hello woorld</Page>
        </PageBackgroundContainer>
     );
}
 
export default BackgroundPage;