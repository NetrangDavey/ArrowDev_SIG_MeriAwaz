import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import { loginUser, logoutUser, setLoading } from "../features/userSlice";
import Home from "../../pages/Home";
import Problems_page from "../../pages/Problems_page";
import Authenticate from "../authenticate/Authenticate";
import Navbar from "../Navbar/Navbar";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(loginUser(authUser));
      } else {
        dispatch(logoutUser());
      }
      dispatch(setLoading(false));
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/problems_pahe"
            element={user ? <Problems_page /> : <Navigate to="/auth" replace />}
          />
          <Route
            path="/auth"
            element={!user ? <Authenticate /> : <Navigate to="/" replace />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
