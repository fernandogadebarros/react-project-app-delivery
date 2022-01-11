import styled from 'styled-components';

export const DirectLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  transition: .3s ease;
  padding: 5px;
  border-radius: 3px;
  background: ${props => props.active ? '#0b4d0b' : 'transparent'};
  &:hover {
    background: #0e550e;
  }
`;

export const DirectIcon = styled.img`
  width: 16px;
  height: 16px;
`;