// Constants
const initialData = {
  openSearchChats: false,
};

// types
const OPEN_SEARCH_CHATS_SUCCESS = "OPEN_SEARCH_CHATS_SUCCESS";

// reducer
export default function filesReducer(state = initialData, action) {
  switch (action.type) {
    case OPEN_SEARCH_CHATS_SUCCESS:
      return { ...state, openSearchChats: action.payload };
    default:
      return state;
  }
}

// actions
export const openSearchChatsAction = () => (dispatch) => {
  dispatch({
    type: OPEN_SEARCH_CHATS_SUCCESS,
    payload: true,
  });
};

export const closeSearchChatsAction = () => (dispatch) => {
  dispatch({
    type: OPEN_SEARCH_CHATS_SUCCESS,
    payload: false,
  });
};
