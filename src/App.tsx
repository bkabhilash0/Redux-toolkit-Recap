import { useEffect } from "react";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/reducers/counter";
import { fetchAllTodos } from "./store/reducers/todos";
import { useAppDispatch, useAppSelector } from "./store/store";

function App() {
  const { value: counterValue } = useAppSelector((state) => state.counter);
  const { todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="counter">
        <h1>Counter = {counterValue}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment By Amount
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.title}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
