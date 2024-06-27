import { createSlice } from "@reduxjs/toolkit";


const initState = {
    count: 0,
} 

// const counterReducer = (state = initState, action) => {
//     console.log(state, action);
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 ...state,
//                 count: state.count + 1
//             };
//         case 'DECREMENT':
//             return {
//                 ...state,
//                 count: state.count - 1
//             };
//         case 'RESET':
//             return {
//                 ...state,
//                 count: 0
//             };
//         default:
//             return state;
//     }
// }

const counterReducer = createSlice({
    name: 'counter',
    initialState: initState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
        reset: (state) => {
            state.count = 0;
        }
    }
})

export default counterReducer;