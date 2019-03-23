import { LOAD_DATA } from './actions';

const initialState = {
  data: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_DATA:
      return { ...state, data: payload };

    default:
      return state;
  }
};
