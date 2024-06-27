import { createSlice } from "@reduxjs/toolkit";

type todoType = {
    id: number,
    title: string,
    
}

const todoReducer = createSlice({
    name: 'todo',
    initialState: {
        // todos: Array<todoType>()
        todos: Array<todoType>()
    },
    reducers: {
        addTodo: (state, action) => {
            // state.push(action.payload);
            state.todos.unshift(action.payload);
            // console.log(state);
            // return [...state, action.payload];
        },
        changeTodoList: (state, action) => {
            // state.todoReducer = action.payload;
            // state = action.payload.res;
            state.todos = action.payload.res;
            // return {
            //     ...state,
            //     todos: action.payload.res
            // };
        },
        clearTodoList: (state) => {
            // state.todoReducer = [];
            state.todos = [];
            // return [];
        },
        getTodo: () => {
            
        }
            // getTodo: () => async (dispatch) => {
            //     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
            //         .then(response => response.json());
            //     dispatch(todoReducer.actions.addTodo({
            //         id: res.id,
            //         title: res.title
            //     }));
            //     // res.forEach(todo => {
            //     //     dispatch(addTodo({
            //     //         id: todo.id,    
            //     //         title: todo.title
            //     //     }));
            //     // });
            //     // console.log(state);
            //     // return state;
            // }
        }
    })

export default todoReducer;

export const { addTodo, getTodo, clearTodoList, changeTodoList } = todoReducer.actions;