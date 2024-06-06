import logo from "./logo.svg";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CompanyBenchScreen from "./screens/CompanyBenchScreen";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <AppRoutes />
      </header>


      <Footer />
    </div>
  );
};

export default App;
