import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useTypedDispatch = () => useDispatch<AppDispatch>();
export default useTypedDispatch;
