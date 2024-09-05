import { Button } from "@/components/ui/button";
import { getToken, login } from "@/features/auth/useAuth";
import { RootState } from "@/features/store";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Auth() {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.useAuth);

//   middleware
  dispatch(getToken());
  if (token) return <Navigate to="/" replace />;

  return (
    <>
      <Button onClick={() => dispatch(login())}>Login</Button>
    </>
  );
}
