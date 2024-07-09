import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Car from "./components/pages/Car";
import BookingForm from "./components/pages/BookingForm";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Cardetail from "./components/UI/Cardetail";
import Login from "./admin/Auth/Login";
import SignUp from "./admin/Auth/Signup";
import Layouts from "./admin/Layouts/Layout";
import Upload from "./admin/pages/Upload";
import Dashboard from "./admin/Dashbord/Dashboard";
import BlogList from "./components/UI/BlogList";
import BlogDetails from "./components/UI/BlogDetails";
import Setting from "./admin/pages/Setting";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/layout" element={<Layouts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/settings" element={<Setting />} />

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vehicles" element={<Car />} />
          <Route path="/blogs" element={<BlogList/>} />
          <Route path="/blogs/:slug" element={<BlogDetails/>} />
          <Route path="/cardetails/:carId" element={<Cardetail />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/bookingform" element={<BookingForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
