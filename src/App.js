import { Route, Routes } from "react-router-dom";
import "./App.css";
import Example from "./Components/Blogs/Example";
import BdOffice from "./Components/Contact/BdOffice";
import Contact from "./Components/Contact/Contact";
import UsOffice from "./Components/Contact/UsOffice";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
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
        <Route path="/contact" element={<Contact />}>
          <Route path="bd-office" element={<BdOffice />}></Route>
          <Route path="us-office" element={<UsOffice />}></Route>
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
