import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/store";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../features/counter/useCounter";

export default function Home() {
  const count = useSelector((state: RootState) => state.useCounter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }
  function handleReset() {
    dispatch(reset());
  }
  function handleIncrementByAmount() {
    dispatch(incrementByAmount(5));
  }

  return (
    <div>
      <span>{count}</span>
      <div className="flex gap-2">
        <button type="button" className="bg-green-500 rounded p-2 text-white" onClick={handleIncrement}>
          increment
        </button>
        <button type="button" className="bg-red-500 rounded p-2 text-white" onClick={handleDecrement}>
          decrement
        </button>
        <button type="button" className="bg-blue-500 rounded p-2 text-white" onClick={handleReset}>
          reset
        </button>
        <button type="button" className="bg-yellow-500 rounded p-2 text-white" onClick={handleIncrementByAmount}>
          incrementByAmount
        </button>
      </div>
    </div>
  );
}
