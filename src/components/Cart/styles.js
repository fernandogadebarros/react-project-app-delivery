import styled from 'styled-components';

export const CartField = styled.div`
  background: #136713;
  position: fixed;
  bottom: 0;
  right: 30px;
  width: 290px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Header = styled.div`
  cursor: pointer;  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
`;

export const CartIcon = styled.img`
  width: 20px;
  height: auto;
`;

export const CartText = styled.div`
  flex: 1;
  color: #fff;
  font-size: 14px;
  margin-left: 12px;
`;

export const Arrow = styled.img`
  width: 18px;
  height: 18px;
`;

export const Body = styled.div`
  display: ${props=>props.show ? 'block' : 'none'};
  color: #fff;
`;

export const ProductsArea = styled.div`
  
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

export const ProductPhoto = styled.img`
  width: 64px;
  height: auto;
  margin-right: 12px;
  border-radius: 3px;
`;

export const ProductInfo = styled.div`
  flex: 1;
`;

export const ProductName = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const ProductPrice = styled.div`
  font-size: 13px;
`;

export const ProductQuantityArea = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const QtIcon = styled.img`
  cursor: pointer;
  width: 12px;
  height: auto;
`;

export const QtText = styled.div`
  
`;

