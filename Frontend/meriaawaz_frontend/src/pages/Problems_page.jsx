import "./Problems_page.css";
import Problem_display from "../components/Problem_dispaly/Problem_dispaly"; // Fixed typo
import Authenticate from "../components/authenticate/Authenticate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../firebase";
import { loginUser, setLoading } from "../components/features/userSlice";

function Problems_page() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
      }
      dispatch(setLoading(false));
    });

    return () => unsubscribe(); // Clean up the listener
  }, [dispatch]);

  const user = useSelector((state) => state.user.user); // Fixed selector path
  const isLoading = useSelector((state) => state.user.isLoading); // Fixed selector path

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="app">{user ? <Problem_display /> : <Authenticate />}</div>
  );
}

export default Problems_page;
