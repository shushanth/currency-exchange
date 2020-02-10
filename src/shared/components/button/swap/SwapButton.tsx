import React, { FunctionComponent, useState, memo } from 'react';

import { SwapbuttonStyled } from './swapButton.styled';
import { SwapbuttonPropsI } from './SwapButton.model';

//TODO: below unicode string are used, as not . replace the same with icons.
const Swapbutton: FunctionComponent<SwapbuttonPropsI> = memo(
  ({ onSwapInvoke }) => {
    const [swapState, setSwapState] = useState(false);
    const onSwapInvokeState = () => {
      const updatedSwapstate = !swapState;
      setSwapState(updatedSwapstate);
      onSwapInvoke(updatedSwapstate);
    };
    return (
      <SwapbuttonStyled onClick={onSwapInvokeState}>
        <div>&#8595;</div>
        <div>&#8593;</div>
      </SwapbuttonStyled>
    );
  },
);

export default Swapbutton;
