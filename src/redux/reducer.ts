import counterReducer from "./slices/counterReducer.ts";
import demoReducer from "./slices/demoReducer.ts";
import todoReducer from "./slices/todoReducer.ts";

const rootReducer = (state = {
    todoReducer: todoReducer.getInitialState(),
    counterrrr: counterReducer.getInitialState(),
    demoReducer: demoReducer.getInitialState()
}, action: {type: string, payload: any}) => {
    // console.log(state, action);
    return {
        todoReducer: todoReducer.reducer(state.todoReducer, action),
        counterrrr: counterReducer.reducer(state.counterrrr, action),
        demoReducer: demoReducer.reducer(state.demoReducer, action),
    }
}

export default rootReducer;