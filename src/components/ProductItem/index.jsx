import React from 'react'
import { 
  Container, 
  ProductPhotoArea, 
  ProductInfoArea, 
  ProductButtonArea, 
  ProductPhoto, 
  ProductName, 
  ProductPrice, 
  ProductIgredients, 
  ProductButton } 
  from './styles';

function ProductItem({ data, onClick }) {
  
  const handleClick = () => {
    onClick(data);
  }

  return (
    <Container onClick={ handleClick }>
      <ProductPhotoArea>
        <ProductPhoto src={ data.image }  />
      </ProductPhotoArea>
      <ProductInfoArea>
        <ProductName>{ data.name }</ProductName>
        <ProductPrice>R$ { data.price }</ProductPrice>
        <ProductIgredients>{ data.ingredients }</ProductIgredients>
      </ProductInfoArea>
      <ProductButtonArea>
        <ProductButton src="/assets/next.png" />
      </ProductButtonArea>
    </Container>
  )
}

export default ProductItem;
