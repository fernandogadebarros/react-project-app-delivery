import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  gap: 10px;
  background: ${props => props.active === props.id ? '#fff' : '#aae09a'};
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-top: 12px;
  transition: .3s ease;
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
`;