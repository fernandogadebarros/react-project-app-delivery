import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 15px;
`;

export const Category = styled.div`
  color: #fff;
  margin-top: 24px;
`;

export const CategoryList = styled.div`
  display: flex;
  gap: 10px;
`;

export const Product = styled.div`
  cursor: pointer;
  margin: 32px 0;
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

export const Pagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  cursor: pointer;
`;

export const ProductPaginationItem = styled.div`
  background: ${props => props.active === props.current ? '#136713' : '#fff'};
  color: ${props => props.active === props.current ? '#fff' : '#136713'};
  padding: 5px 12px;
  border-radius: 3px;
  box-shadow: 0 0 3px 0 rgba(16,16,16,.3);
  transition: .3s;
  &:hover {
    color: #fff;
    background: #136713;
  }
`;