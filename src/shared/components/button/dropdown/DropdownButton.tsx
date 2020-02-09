import React, { FunctionComponent, memo } from 'react';

import { CEArrow } from '../../index';
import { DropdownbuttonPropsI } from './dropdownButton.model';
import {
  DropdownBtnContainerStyled,
  DropdownBtnNameStyled,
  DropdownBtnArrowStyled,
} from './dropdownButton.styled';

const DropdownButton: FunctionComponent<DropdownbuttonPropsI> = memo(
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
