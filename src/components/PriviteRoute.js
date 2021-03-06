import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children, ...rest }) {
  const history = useHistory();
  const token = useSelector(state => state.user.token);

  // Check if has user token 
  if(!token || token === '') {
    history.push('/login');
    return null;
  }

  return (
    <Route { ...rest }>
      {children}
    </Route>
  )
}

export default PrivateRoute
