/*
 * @description: Arrow component
 * @propsType ArrowProps
 */
import React, { FunctionComponent, memo } from 'react';
import { ArrowPropsI } from './Arrow.model';

import {
  ArrowContainerStyled,
  ArrowMediumDownStyled,
  ArrowSmallDownStyled,
  ArrowSmallUpStyled,
} from './arrow.styled';

const Arrow: FunctionComponent<ArrowPropsI> = memo(
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
