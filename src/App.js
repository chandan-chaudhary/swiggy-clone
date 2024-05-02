import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Login from "./components/login/Login";
import Resturant from "./components/resturant/Resturant";
import RestaurantMenu from "./components/resturant/RestaurantMenu";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/signIn" element={<Login />}/>
        <Route path="/restaurant" element={<RestaurantMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
