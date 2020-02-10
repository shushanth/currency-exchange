import React, { FunctionComponent, memo } from 'react';

import { CEArrow } from '../../index';
import { DropdownbuttonProps } from './DropdownButton.model';
import {
  DropdownBtnContainerStyled,
  DropdownBtnNameStyled,
  DropdownBtnArrowStyled,
} from './DropdownButton.styled';

const DropdownButton: FunctionComponent<DropdownbuttonProps> = memo(
  ({ onClick, selectedLabel = '' }): JSX.Element => {
    return (
      <DropdownBtnContainerStyled onClick={() => onClick(selectedLabel)}>
        <DropdownBtnNameStyled>{selectedLabel}</DropdownBtnNameStyled>
        <DropdownBtnArrowStyled>
          <CEArrow size="small" />
        </DropdownBtnArrowStyled>
      </DropdownBtnContainerStyled>
    );
  },
);

export default DropdownButton;
