import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
  CartField, 
  Header, 
  Body, 
  CartIcon, 
  CartText, 
  Arrow,
  ProductsArea,
  ProductItem,
  ProductPhoto,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductQuantityArea,
  QtIcon,
  QtText
} from './styles';


function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);
  const [show, setShow] = useState(true);

  const handleCart = () => {
    setShow(!show);
  }

  const handleProductChange = (key, signal) => {
    dispatch({ type: 'CHANGE_PRODUCT', payload: { key, signal }})
  }

  return (
    <CartField>
      <Header onClick={ handleCart }>
        <CartIcon src="/assets/cart.png" />
        <CartText>Meu Carrinho ({ products.length })</CartText>
        { show && 
          <Arrow src="/assets/down.png" />
        }
      </Header>
      <Body show={ show }>
        <ProductsArea>
          {products.map((item, index) => (
            <ProductItem key={ index }>
              <ProductPhoto src={ item.image } />
              <ProductInfo>
                <ProductName>{ item.name }</ProductName>
                <ProductPrice>R$ { item.price.toFixed(2) }</ProductPrice>
              </ProductInfo>
              <ProductQuantityArea>
                <QtIcon onClick={ () => handleProductChange(index, '-') } src="/assets/minus.png" />
                <QtText>{ item.qt }</QtText>
                <QtIcon onClick={ () => handleProductChange(index, '+') } src="/assets/plus.png" />
              </ProductQuantityArea>
            </ProductItem>
          ))}
        </ProductsArea>
      </Body>
    </CartField>
  );
}

export default Cart;
