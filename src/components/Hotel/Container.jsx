import styled from 'styled-components';

const Box = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  margin-top: 4rem;

  @media only screen and (max-width: 80em) {
    padding: 0 2rem;
  }
`;

function Container({ children }) {
  return <Box>{children}</Box>;
}

export default Container;
