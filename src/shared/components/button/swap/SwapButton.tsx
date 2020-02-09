import React, { FunctionComponent, useState } from 'react';

import { SwapbuttonStyled } from './swapbutton.styled';
import { SwapbuttonPropsI } from './Swapbutton.model';

//TODO: below unicode string are used, as not . replaced the same with icons.
const Swapbutton: FunctionComponent<SwapbuttonPropsI> = ({ onSwapInvoke }) => {
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
};

export default Swapbutton;
