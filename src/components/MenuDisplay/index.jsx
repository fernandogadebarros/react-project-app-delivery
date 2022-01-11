import React from 'react';
import { DirectLink, DirectIcon } from './styles';
import { useHistory, useLocation } from 'react-router-dom';

function MenuDisplay({ title, icon, link }) {
  const history = useHistory();
  const location = useLocation();

  let activeLink = location.pathname === link;

  const handleLinkClick = (e) => {
    e.preventDefault();
    history.push(link);
  }

  return (
    <DirectLink 
    data-tip={ title }
    data-for="tip-right"
    title={ title } 
    active={ activeLink } 
    href={ link } 
    onClick={ handleLinkClick }
    >
      <DirectIcon src={ icon } />
    </DirectLink>
  );
}

export default MenuDisplay;
