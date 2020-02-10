import styled from 'styled-components';
import colors from '../../../styles-utils/colorPallets';

const { blueScale } = colors;

const SwapbuttonStyled = styled.button`
  background: ${blueScale.dark};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 30px;
  position: absolute;
  padding: 0 6px;
  outline: none;
  top: 200%;
  width: 30px;

  > div {
    color: ${colors.white};
    flex: 1;
    font-size: 10px;
  }
`;

export { SwapbuttonStyled };
