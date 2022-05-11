import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import reducerCallApi from "./callApi/reducerCallApi";
import reducerFilters from "./filtersButton/reducerFiltersButton"

const rootReducer = combineReducers({
    callApi: reducerCallApi,
    filters: reducerFilters
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch