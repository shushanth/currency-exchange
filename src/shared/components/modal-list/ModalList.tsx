import React, { FunctionComponent, memo } from 'react';

import { ModelListProps } from './ModalList.model';
import {
  ModelListContainerStyled,
  ModalListItemsContainerStyled,
  ModelListItemStyled,
  ModalCloseStyled,
} from './ModalList.styled';
import { uuid } from '../../../utils';

//TODO: Add listItem types
const ModalList: FunctionComponent<ModelListProps> = memo(
  ({
    name = 'modal',
    showModal = false,
    listItems = [],
    onClose,
    onItemSelect,
  }): JSX.Element | null => {
    return showModal ? (
      <ModelListContainerStyled id={name}>
        <ModalCloseStyled onClick={onClose}>close</ModalCloseStyled>
        <ModalListItemsContainerStyled>
          {listItems.map((item: any) => (
            <ModelListItemStyled
              onClick={() => onItemSelect(item.name)}
              key={uuid()}
            >
              {item.name} <span className="sub-label">{item.fullName}</span>
            </ModelListItemStyled>
          ))}
        </ModalListItemsContainerStyled>
      </ModelListContainerStyled>
    ) : null;
  },
);

export default ModalList;
