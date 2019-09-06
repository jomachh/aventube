function MoviesReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_FIRST_MOVIES': {
      return {...state, ...action.payload};
    }
    case 'SET_SECOND_MOVIES': {
      return {...state, ...action.payload};
    }
    case 'SET_SELECTED_MOVIE': {
      return {...state, selectedMovie: action.payload.movie};
    }
    default:
      return state;
  }
}

export default MoviesReducer;
