// Constants
const initialData = {
  socket: false,
};

// types
const SET_SOCKET_SUCCESS = "SET_SOCKET_SUCCESS";

// reducer
export default function filesReducer(state = initialData, action) {
  switch (action.type) {
    case SET_SOCKET_SUCCESS:
      return { ...state, socket: action.payload };
    default:
      return state;
  }
}

// actions
export const setSocketAction = (data) => (dispatch) => {
  dispatch({
    type: SET_SOCKET_SUCCESS,
    payload: data,
  });
};
