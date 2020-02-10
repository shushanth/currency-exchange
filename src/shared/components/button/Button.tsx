import React, { FunctionComponent } from 'react';

import { ButtonContainerStyled, ButtonStyled } from './Button.styled';
import { ButtonProps } from './Button.model';

const Button: FunctionComponent<ButtonProps> = ({
  label = '',
  level = 'primary',
  onClick,
}): JSX.Element => {
  return (
    <ButtonContainerStyled level={level}>
      <ButtonStyled onClick={onClick}>{label}</ButtonStyled>
    </ButtonContainerStyled>
  );
};

export default Button;
