import Redux from "redux";
import rootReducer from "./reducers/root";

const store = Redux.createStore(rootReducer);

export default store;
