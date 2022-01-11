import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 3px;
  box-shadow: 0 0 3px 0 rgba(16,16,16,.3);
  background: #fff;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductPhotoArea = styled.div`
  width: 100px;
  margin: 0 10px 0 0;
`;

export const ProductInfoArea = styled.div`
  flex: 1;
  color: #136713;
`;

export const ProductButtonArea = styled.div``;

export const ProductPhoto = styled.img`
  width: 100%;
  border-radius: 3px;
`;

export const ProductName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductPrice = styled.div`
  font-size: 14px;
`;

export const ProductIgredients = styled.div`
  font-size: 11px;
`;

export const ProductButton = styled.img`
  width: 12px;
`;
