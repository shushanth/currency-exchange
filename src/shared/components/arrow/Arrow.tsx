/*
 * @description: Arrow component
 * @propsType ArrowProps
 */
import React, { FunctionComponent } from 'react';
import { ArrowProps } from './Arrow.model';

import {
  ArrowContainerStyled,
  ArrowMediumDownStyled,
  ArrowSmallDownStyled,
  ArrowSmallUpStyled,
} from './arrow.styled';

type size = 'small' | 'medium';
type mode = 'down' | 'up';

const Arrow: FunctionComponent<ArrowProps> = ({
  size = 'medium',
  mode = 'down',
}): JSX.Element => {
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
};

export default Arrow;
