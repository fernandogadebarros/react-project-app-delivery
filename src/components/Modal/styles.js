import styled from 'styled-components';

export const Container = styled.div`
  display: ${props=>props.status ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.65);
  z-index: 99;
`; 

export const ModalBody = styled.div`
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 0 40px rgba(0,0,0,.7);
  overflow: auto;
`; 