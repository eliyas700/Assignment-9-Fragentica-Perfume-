import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
