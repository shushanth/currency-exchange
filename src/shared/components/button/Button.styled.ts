import styled from 'styled-components';
import colors from '../../styles-utils/colorPallets';

const { blueScale } = colors;

const ButtonContainerStyled = styled.div`
  background-color: ${(props: { level: string }) =>
    props.level === 'primary' ? `${blueScale.dark}` : 'inherit'};
  display: flex;
  height: 100%;
  width: 100%;
`;

const ButtonStyled = styled.button`
  background: inherit;
  color: ${colors.white};
  font-size: 18px;
  height: 100%;
  letter-spacing: 0.1em;
  outline: none;
  padding: 15px;
  width: 100%;
`;

export { ButtonContainerStyled, ButtonStyled };
