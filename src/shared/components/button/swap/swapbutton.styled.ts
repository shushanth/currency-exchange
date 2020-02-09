import styled from 'styled-components';

const SwapbuttonStyled = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 200%;
  background: #194c7f;
  padding: 0 6px;

  > div {
    color: #fff;
    flex: 1;
    font-size: 15px;
  }
`;

export { SwapbuttonStyled };