/*
 * @description: Arrow component
 * @propsType ArrowProps
 */
import React, { FunctionComponent, memo } from 'react';
import { ArrowProps } from './Arrow.model';

import {
  ArrowContainerStyled,
  ArrowMediumDownStyled,
  ArrowSmallDownStyled,
  ArrowSmallUpStyled,
} from './Arrow.styled';

const Arrow: FunctionComponent<ArrowProps> = memo(
  ({ size = 'medium', mode = 'down' }): JSX.Element => {
    return (
      <ArrowContainerStyled>
        {size === 'medium' && mode === 'down' && (
          <ArrowMediumDownStyled></ArrowMediumDownStyled>
        )}
        {size === 'small' && mode === 'down' && (
          <ArrowSmallDownStyled></ArrowSmallDownStyled>
        )}
        {size === 'small' && mode === 'up' && (
          <ArrowSmallUpStyled></ArrowSmallUpStyled>
        )}
      </ArrowContainerStyled>
    );
  },
);

export default Arrow;
