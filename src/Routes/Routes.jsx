import { Route, Routes, HashRouter as Router } from "react-router-dom";
import {
  Home,
  Shop,
  Pricing,
  About,
  Contact,
  Productdetail,
} from "../Pages/index";
import ScrollToTop from "../Hooks/Scrolhook";

const Jumping = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/price" element={<Pricing />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/product/:id" element={<Productdetail />}></Route>
    </Routes>
  </Router>
);
export default Jumping;
