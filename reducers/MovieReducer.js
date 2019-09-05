function MoviesReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_FIRST_MOVIES': {
      return {...state, ...action.payload};
    }
    case 'SET_SECOND_MOVIES': {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
}

export default MoviesReducer;
