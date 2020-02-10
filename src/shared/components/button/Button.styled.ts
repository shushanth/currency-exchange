import styled from 'styled-components';

const ButtonContainerStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${(props: { level: string }) =>
    props.level === 'primary' ? '#194c7f' : 'inherit'};
`;

const ButtonStyled = styled.button`
  background: inherit;
  outline: none;
  padding: 15px;
  color: #fff;
  font-size: 18px;
  width: 100%;
  height: 100%;
  letter-spacing: 0.1em;
`;

export { ButtonContainerStyled, ButtonStyled };
