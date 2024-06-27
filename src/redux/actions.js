import { addTodo, changeTodoList, clearTodoList } from "./slices/todoReducer"

export const counter_increment = () => {
    return {
        type: 'INCREMENT'
    }
}
export const counter_decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

const addTodoAction = (data) => {
    return {
        type: addTodo,
        payload: data
    }
}

export const addTodoAsync = () => async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json());
    // dispatch(clearTodoList());
    res.forEach(todo => {
        dispatch(addTodo({
            id: todo.id,
            title: todo.title
        }))
    })
}

export const refreshTodoList = () => async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json());
    // dispatch(clearTodoList());
    dispatch(changeTodoList({
        res
    }));
}