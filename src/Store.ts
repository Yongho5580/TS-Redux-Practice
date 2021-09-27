import { create } from "domain";
import {createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
// ReturnType은 특정 함수의 반환 타입을 추출해내는 제네릭 타입입니다.
export type RootReducerType = ReturnType<typeof rootReducer>;

export default store;
