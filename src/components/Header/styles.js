import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 6px;
  border-radius: 4px;
  background: #136713;
`;

export const Brand = styled.img`
  width: auto;
  height: 30px;
`;

export const SearchInput = styled.input`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  outline: 0;
  background: #fff;
  background-image: url('/assets/search.png');
  background-size: 15px;
  background-repeat: no-repeat;
  transition: .4s ease;
  width: ${props => props.active ? 250 : 40}px;
  text-indent: ${props => props.active ? 0 : -200}px;
  background-position: ${props => props.active ? '16px' : 'center'};
  padding-left: ${props => props.active ? 40 : 0}px;
  cursor: pointer;

  &:focus {
    cursor: text;
  }
`;
