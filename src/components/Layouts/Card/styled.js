import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0rem 0rem 2rem 0rem rgba(0, 0, 0, 0.25);
  text-transform: capitalize;

  .figure {
    width: 100%;
    height: 100%;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 2/1;
  }

  .infoBox {
    position: ${(props) => (props?.absolute ? 'absolute' : 'initial')};
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem 2rem;
    margin-top: -0.6rem;
    background: #fff;
    ${(props) => {
      if (props?.blured) return `backdrop-filter:blur(1px); background: rgba(0, 0, 0, 0.5);`;
    }};
  }

  .title {
    font-size: ${({ titleSize }) => (titleSize ? titleSize : '1.6rem')};
    font-weight: 700;
  }

  .caption {
    margin-top: 0.5rem;
    font-size: ${({ captionSize }) => (captionSize ? captionSize : '1.4rem')};
  }
`;

export const CardDetailed = styled(Card)`
  border-radius: 0rem;

  .title {
    font-size: ${({ titleSize }) => (titleSize ? titleSize : 'initial')};
  }

  .infoBox {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .caption {
    margin-top: auto;
  }

  .description {
    margin-top: 1rem;
    font-size: 1.4rem;
  }

  .rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
  }

  .rate {
    color: orange;
  }
`;
