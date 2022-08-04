import styled from 'styled-components';

const ContainerBox = styled.div`
  position: relative;
  display: flex;
  gap: 5rem;
  max-width: 114rem;
  margin: 0 auto;
  margin-top: 5em;
  margin-bottom: 5rem;

  @media only screen and (max-width: 80em) {
    padding: 0 2rem;
  }

  @media only screen and (max-width: 37.5em) {
    gap: 3rem;
    margin-top: 2rem;
    flex-direction: column;
  }
`;

function Container({ children }) {
  return <ContainerBox>{children}</ContainerBox>;
}

export default Container;
