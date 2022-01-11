import React, { useState } from 'react';
import { Container, Brand, SearchInput } from './styles';

function Header({ search, onSearch }) {

  const [isActive, setIsActive] = useState(search === '' ? false : true);

  const handleFocus = () => {
    setIsActive(true);
  }

  const handleBlur = () => {
    if(search === '') {
      setIsActive(false);
    }
  }

  return (
    <Container>
      <Brand src="/assets/logo.png" />
      <SearchInput 
      type="text" 
      value={ search }
      onChange={ (e) => onSearch(e.target.value) }
      placeholder="Digite o nome do produto..."
      active={ isActive }
      onBlur={ handleBlur}
      onFocus={ handleFocus }
      />
    </Container>
  )
}

export default Header;
