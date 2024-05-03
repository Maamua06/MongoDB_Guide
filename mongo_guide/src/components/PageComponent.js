import styled from "styled-components";

// CSS for component
const SheetContainer = styled.div`
  width: 80%;
  max-width: 600px;
  background-color: #fff;
  border: 2px solid #000; /* Change border color to black */
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
  color: #000;
`;

const Page = () => {
  return <SheetContainer></SheetContainer>;
};

export default Page;
