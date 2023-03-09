import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { WilderContextProvider } from "./contexts/WilderContext";

function App() {
  return (
    <WilderContextProvider>
    <Router>
      <div className="App">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router></WilderContextProvider>
  );
}

export default App;
