// import { createStore } from "redux";
// import rootReducer from "./reducer";
import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterReducer.js";
import demoReducer from "./slices/demoReducer.js";
import todoReducer from "./slices/todoReducer.js";
import rootReducer from "./reducer.ts";
import { thunk } from "redux-thunk";

const middleware = (store) => (next) => (action) => {
    console.log("Middleware", {store, next, action});
    next(action);
}

// core
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
// const store = configureStore({
//     reducer: rootReducer,
    
// });
// const store = configureStore({
//     reducer: {
//         todoReducer: todoReducer.reducer,
//         counterrrr: counterReducer.reducer,
//         demoReducer: demoReducer.reducer,
//         // counterrrr: (state = {
//         //     count: 0
//         // }, action) => {
//         //     // return counterReducer.reducer(state, action);
//         //     switch (action.type) {
//         //         case 'INCREMENT':
//         //             return {
//         //                 ...state,
//         //                 count: state.count + 1
//         //             };
//         //         case 'DECREMENT':
//         //             return {
//         //                 ...state,
//         //                 count: state.count - 1
//         //             };
//         //         case 'RESET':
//         //             return {
//         //                 ...state,
//         //                 count: 0
//         //             };
//         //         default:
//         //             return state;
//         //     }
//         // }
//     }
// }, applyMiddleware(middleware));

export default store;