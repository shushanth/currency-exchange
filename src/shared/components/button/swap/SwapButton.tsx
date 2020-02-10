import React, { FunctionComponent, memo } from 'react';

import { SwapbuttonStyled } from './SwapButton.styled';
import { SwapbuttonProps } from './SwapButton.model';

//TODO: below unicode string are used (not recommended), as not . replace the same with icons.
const Swapbutton: FunctionComponent<SwapbuttonProps> = memo(
  ({ onSwapInvoke }) => {
    return (
      <SwapbuttonStyled onClick={onSwapInvoke}>
        <div>&#8595;</div>
        <div>&#8593;</div>
      </SwapbuttonStyled>
    );
  },
);
export default Swapbutton;
