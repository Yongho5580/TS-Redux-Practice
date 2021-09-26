import { combineReducers} from "redux" 
import PokemonReducer from "./PokemonReducer";


// 프로젝트 규모가 커지면 리듀서가 다양해진다. 이 때 나눠진 리듀서들을 한 번에 모아주는 것이 rootReducer의 역할이다.
const rootReducer =  combineReducers({
    PokemonReducer
});

export default rootReducer;