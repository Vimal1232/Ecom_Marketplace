import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home, Shop, Pricing } from "../Pages/index";

const Jumping = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/price" element={<Pricing />}></Route>
    </Routes>
  </Router>
);
export default Jumping;
