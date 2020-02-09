/*
 * @description: Functional component, which abstracts input
 * @propsType InputPropsI
 */
import React, { FunctionComponent, ChangeEvent } from 'react';

import { InputElementStyled, InputContainerStyled } from './input.styled';
import { InputPropsI } from './Input.model';

const Input: FunctionComponent<InputPropsI> = ({
  val,
  onInputChange,
  inputType = 'text',
  placeholderText = '',
}): JSX.Element => {
  const getPreciseInputVal = () => {
    if (!val) {
      return '';
    }
    return val;
  };
  const onInputAdd = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    if (inputType === 'number') {
      onInputChange(Number(value));
      return;
    }
    onInputChange(value);
  };
  return (
    <InputContainerStyled>
      <InputElementStyled
        placeholder={placeholderText}
        type={inputType}
        value={getPreciseInputVal()}
        onChange={onInputAdd}
      ></InputElementStyled>
    </InputContainerStyled>
  );
};

export default Input;
