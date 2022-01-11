import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Container, Menu, Body } from './GlobalStyles';

import Home from './pages/Home';

import PrivateRoute from './components/PriviteRoute';
import MenuDisplay from './components/MenuDisplay';
import Cart from './components/Cart';
import Tooltip from 'react-tooltip';

export default () => {

  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuDisplay title="Loja" icon="/assets/store.png" link="/" />
          <MenuDisplay title="Pedidos" icon="/assets/order.png" link="/orders" />
          <MenuDisplay title="Meu Perfil" icon="/assets/profile.png" link="/profile" />
        </Menu>
        <Body>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/orders">
              <div>Tela de Pedidos</div>
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <div>Tela de Perfil</div>
            </PrivateRoute>
          </Switch>
        </Body>
        <Cart />

        <Tooltip id="tip-top" place="top" effect="solid" textColor='#0e550e' backgroundColor='#aae09a' />
        <Tooltip id="tip-right" place="right" effect="solid" textColor='#0e550e' backgroundColor='#aae09a' />
      </Container>


    </BrowserRouter>
  );
}