import React from 'react'
import { Container, ModalBody } from './styles';

function Modal({ status, setStatus, children }) {

  const handleModal = (event) => {
    const target = event.target;
    if(target.classList.contains('modalBG')) {
      setStatus(false);
    }
  }

  return (
    <Container 
    className="modalBG"
    status={ status } 
    onClick={ handleModal }
    >
      <ModalBody>
        { children }
      </ModalBody>
    </Container>
  )
}

export default Modal;
