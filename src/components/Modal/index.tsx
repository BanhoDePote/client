import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: relative;
  .close{
    width: 30px;
    height: 30px;
    background-color: #920808;
    position: absolute;
    right: 10px;
    top: 10px;
    color: white;
    border-radius: 5px;
    border: 1px solid #777474;
    
    &:hover{
      filter: brightness(4);
    }
  }
`;

export const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <button className='close'onClick={onClose}>X</button>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};