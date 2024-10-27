// src/App.js

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Auth from "./component/Auth";
import Home from "./pages/Home";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { currentUser } = useAuth();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={currentUser ? <Home /> : <Navigate to="/auth" />}
        />
        <Route path="/auth" element={!currentUser ? <Auth /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
