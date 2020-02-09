import styled from 'styled-components';

const SwapbuttonStyled = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 200%;
  background: #194c7f;
  padding: 0 6px;
  outline: none;
  cursor: pointer;

  > div {
    color: #fff;
    flex: 1;
    font-size: 10px;
  }
`;

export { SwapbuttonStyled };
