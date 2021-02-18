import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cart from "../reducers/cartReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  cart,
});

const persistConfig = { key: "cart", storage: storage, whitelist: ["cart"] };
const pReducers = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducers, applyMiddleware(thunk));
const persistor = persistStore(store);

export { persistor, store };
