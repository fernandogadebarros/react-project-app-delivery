import styled from 'styled-components';

export const Container = styled.div`
  width: 672px;
  padding: 10px;
`;

export const ProductArea = styled.div`
  display: flex;  
  height: 200px;
`;

export const ProductPhoto = styled.img`
  width: 300px;
  border-radius: 4px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin-left: 12px;
`;

export const ProductDetails = styled.div`
`;

export const ProductQuantity = styled.div`
  height: 50px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const Ingredients = styled.div`
  font-size: 14px;
`;

export const ProductButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin-top: 12px;
`;

export const Button = styled.button`
  background: #073c07;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  padding: 14px 0;
  border-radius: 3px;
  width: 160px;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #073c07;
  border-radius: 3px;
  padding: 10px;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const QtImage = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const QtText = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;
