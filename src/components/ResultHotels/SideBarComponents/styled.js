import styled from 'styled-components';

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label``;

export const Input = styled.input`
  height: 4rem;
  outline: none;
  padding: 0 1rem;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.p`
  font-size: 2rem;
  margin: 2rem 0 1rem 0;
`;

export const OptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & label {
    cursor: pointer;
  }
`;

export const OptionInput = styled.input`
  width: 5rem;
  outline: none;
  padding: 0 0.2rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
