import { createSlice } from "@reduxjs/toolkit";

const demoReducer = createSlice({
    name: 'demo',
    initialState: {
        demo: 'demo'
    },
    reducers: {
        demoAction: (state) => {
            state.demo = (state.demo === 'demoAction' ? "demo" : "demoAction");
        }
    }
})
export const { demoAction } = demoReducer.actions;
export default demoReducer;