import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import CreateGroup from "./Pages/CreateGroup";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AuthProvider from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./routes/PrivateRoute";
import MyGroups from "./Pages/MyGroups";
import AllGroups from "./Pages/AllGroups";
import GroupDetails from "./Pages/GroupDetails";
import UpdateGroup from "./Pages/UpdateGroup";
// Optional PrivateRoute Wrapper
import NotFound from "./Pages/NotFound";

function App() {
  return (
    
    <Router>
      <AuthProvider>
        <Navbar />
        <div className="pt-16 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/createGroup"
              element={
                <PrivateRoute>
                  <CreateGroup />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/myGroups"
              element={
                <PrivateRoute>
                  <MyGroups />
                </PrivateRoute>
              }
            />
            <Route path="/groups" element={<AllGroups />} />
          
            <Route path="/group/:id" element={<GroupDetails />} />
            <Route
              path="/updateGroup/:id"
              element={
                <PrivateRoute>
                  <UpdateGroup />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        <ToastContainer />
      </AuthProvider>
    </Router>
  );
}

export default App;
