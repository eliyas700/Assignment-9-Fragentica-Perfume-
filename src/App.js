import { Route, Routes } from "react-router-dom";
import "./App.css";
import Example from "./Components/Blogs/Example";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import Reviews from "./Components/Reviews/Reviews";
import NotFound from "./Not Found/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Example />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
