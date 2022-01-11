const initialState = {
  products: [],
  address: [],
  discount: 0,
  delivery: 0,
};

export default (state = initialState, action) => {
  // eslint-disable-next-line
  switch(action.type) {
    case 'ADD_PRODUCT':
      let products = [...state.products];
      let id = action.payload.data.id; 

      let index = products.findIndex(item => item.id === id);

      if(index > -1) {
        products[index].qt += action.payload.qt;
      } else {
        products.push({ ...action.payload.data, qt: action.payload.qt });
      }

      console.log(products);
      return { ...state, products };

    case 'CHANGE_PRODUCT':
      let product = [...state.products];
      if(product[action.payload.key]) {
        switch(action.payload.signal) {
          case '+':
            product[action.payload.key].qt++;
          break;
          case '-':
            product[action.payload.key].qt--;
            if(product[action.payload.key].qt <= 0) {
              product = product.filter((item, index) => index !== action.payload.key);
            }
          break;
          default:
        }
        return { ...state, product };
      }
  }

  return state;
}