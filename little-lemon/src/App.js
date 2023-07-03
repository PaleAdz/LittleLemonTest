import "./App.css";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Book from "./Components/book";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
