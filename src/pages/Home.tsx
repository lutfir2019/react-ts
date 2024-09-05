import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/features/store";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "@/features/counter/useCounter";
import { Button } from "@/components/ui/button";

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
        <Button type="button" onClick={handleIncrement}>
          increment
        </Button>
        <Button type="button" variant="destructive" onClick={handleDecrement}>
          decrement
        </Button>
        <Button type="button" variant="secondary" onClick={handleReset}>
          reset
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={handleIncrementByAmount}
        >
          incrementByAmount
        </Button>
      </div>
    </div>
  );
}
