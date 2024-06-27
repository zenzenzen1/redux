import { useDispatch, useSelector } from "react-redux";
import { counterSelector } from "../redux/selectors.js";
// import { counter_decrement, counter_increment } from '../redux/actions';
import counterReducer from "../redux/slices/counterReducer.ts";
import { demoAction } from "../redux/slices/demoReducer.ts";
import { addTodo, getTodo } from "../redux/slices/todoReducer.ts";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { addTodoAsync, refreshTodoList } from "../redux/actions.js";

const Demo = () => {
    const dispatch = useDispatch();
    const count = useSelector(counterSelector);
    const demo = useSelector(state => state.demoReducer);
    // useMemo(() => {
    //     console.log({count, demo});
    //     return count;
    // }, [count]);

    // console.log(count);
    const ref = useRef({});
    useEffect(
        () => {
            console.log('useMemo');
            ref.current.timerId = setInterval(() => {
                dispatch(demoAction());
            }, 1000);
            return () => {
                clearInterval(ref.current.timerId);
            }
        },
        [],
    )



    // useMemo(() => {
    //     dispatch(getTodo());
    // }, []);
    const todoId = useRef(1);

    const todos = useSelector(state => state.todoReducer.todos);
    // console.log(todos);

    const handleAddTodo = async () => {
        todoId.current;
        dispatch(addTodo({
            id: Math.round(Math.random() * 1000),
            title: todo
        }));
    }
    // console.log(todos);

    const [todo, setTodo] = useState('');
    return (
        <div>
            <span>{demo.demo}</span>
            <h2>{count.count}</h2>
            <button onClick={() => {
                // dispatch(counter_increment());
                dispatch(counterReducer.actions.increment());
                // dispatch({ type: "INCREMENT" });
            }}>+</button>
            <button onClick={() => {
                // dispatch(counter_decrement());
                dispatch(counterReducer.actions.decrement());
                // dispatch({ type: "DECREMENT" });
            }}>
                -</button>
            <div>
                <input onChange={(e) => setTodo(e.target.value)} />
                <button
                    onClick={handleAddTodo}
                >
                    Add todo
                </button>

                <button
                    onClick={() => {
                        dispatch(addTodoAsync());
                    }}
                >
                    Add todo async
                </button>

                <button
                    onClick={() => {
                        dispatch(refreshTodoList());
                        // dispatch();
                    }}
                >
                    Refresh todo list
                </button>
                {todos && todos.length > 0 && todos.map((todo, index) => (
                    <div key={index}>{todo.id} - {todo.title}</div>
                ))}
            </div>
        </div>

    )
}

export default Demo
