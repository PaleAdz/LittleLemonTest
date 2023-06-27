import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
