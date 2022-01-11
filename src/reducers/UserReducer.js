const initialState = {
  name: '',
  token: '',
};

export default (state = initialState, action) => {
  // eslint-disable-next-line
  switch(action.type) {
    case 'SET_TOKEN':
      return { ...state, name: action.payload.token };

    case 'SET_NAME':
      return { ...state, name: action.payload.name };
  }

  return state;
}