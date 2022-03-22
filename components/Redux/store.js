import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import seachChatsDucks from "./seachChatsDucks";
import newMessageDucks from "./newMessageDucks";
import socketDucks from "./socketDucks";

const rootReducer = combineReducers({
  seachChatsData: seachChatsDucks,
  newMessageData: newMessageDucks,
  socketData: socketDucks,
});

export default function generateStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
