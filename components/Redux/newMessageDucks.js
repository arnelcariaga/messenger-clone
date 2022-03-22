// Constants
const initialData = {
  openNewMessageModal: false,
};

// types
const OPEN_NEW_MESSAGE_MODAL_SUCCESS = "OPEN_NEW_MESSAGE_MODAL_SUCCESS";

// reducer
export default function filesReducer(state = initialData, action) {
  switch (action.type) {
    case OPEN_NEW_MESSAGE_MODAL_SUCCESS:
      return { ...state, openNewMessageModal: action.payload };
    default:
      return state;
  }
}

// actions
export const openNewMessageModalAction = () => (dispatch) => {
  dispatch({
    type: OPEN_NEW_MESSAGE_MODAL_SUCCESS,
    payload: true,
  });
};

export const closeNewMessageModalAction = () => (dispatch) => {
  dispatch({
    type: OPEN_NEW_MESSAGE_MODAL_SUCCESS,
    payload: false,
  });
};
