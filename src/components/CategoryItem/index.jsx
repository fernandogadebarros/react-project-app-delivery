import React from 'react';
import { Container, Image } from './styles';

function CategoryItem({ data, activeCategory, setActiveCategory }) {

  const handleCategoryClick = () => {
    setActiveCategory(data.id)
  }

  return (
    <Container 
    active={ activeCategory } 
    id={ data.id } 
    onClick={ handleCategoryClick }
    data-tip={ data.name }
    data-for="tip-top"
    >
      <Image src={data.image} />
    </Container>
  )
}

export default CategoryItem;
