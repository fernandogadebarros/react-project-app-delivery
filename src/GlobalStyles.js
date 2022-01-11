import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #ccc;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #136713;
  width: 40px;
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  background: #00980d;
  overflow-y: auto;
  background-image: url('/assets/bg.png');
`;
