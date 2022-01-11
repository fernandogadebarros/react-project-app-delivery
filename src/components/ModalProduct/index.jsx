import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container,
  ProductArea,
  ProductPhoto,
  ProductInfo,
  ProductDetails,
  ProductQuantity,
  ProductButtons,
  Name,
  Ingredients,
  Button,
  Quantity,
  Price,
  QtImage,
  QtText
} from './styles';

function ModalProduct({ data, setStatus }) {

  const [qt, setQt] = useState(1);
  const dispatch = useDispatch();

  const handleCancelButton = () => {
    setStatus(false);
  }

  const handleAddToCart = () => {
    // unir as informações e envia ao reducer
    dispatch({ type: 'ADD_PRODUCT', payload: { data, qt }});
    setStatus(false);
  }

  useEffect(() => {
    setQt(1);
  }, [data])

  const handleMinusQt = () => {
    if(qt > 1) {
      setQt(qt - 1);
    }
  }

  const handlePlusQt = () => {
    setQt(qt + 1);

  }

  return (
    <Container>
      <ProductArea>
        <ProductPhoto src={ data.image } />

        <ProductInfo>
          <ProductDetails>
            <Name>{ data.name }</Name>
            <Ingredients>{ data.ingredients }</Ingredients>
          </ProductDetails>
          
          <ProductQuantity>
            <Quantity>
              <QtImage onClick={ handleMinusQt} src="assets/minus.png" />
              <QtText>{ qt }</QtText>
              <QtImage onClick={ handlePlusQt } src="assets/plus.png" />
            </Quantity>

            <Price>
              R$ { (data.price * qt).toFixed(2) }
            </Price>
          </ProductQuantity>
        </ProductInfo>
      </ProductArea>

      <ProductButtons>
        <Button onClick={ handleCancelButton }>Cancelar</Button>
        <Button onClick={ handleAddToCart }>Adicionar ao Carrinho</Button>
      </ProductButtons>
    </Container>
  )
}

export default ModalProduct;
