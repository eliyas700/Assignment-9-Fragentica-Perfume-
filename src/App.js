import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
