import { Outlet } from "react-router";
import "./App.css";
import Header from "./inc/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
