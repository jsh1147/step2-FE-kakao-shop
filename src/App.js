import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setLogInTime } from "store/slices/userSlice";

import Test from "pages/Test.js";
import LogIn from "pages/LogIn.js";
import SignUp from "pages/SignUp.js";
import Layout from "components/templates/Layout";
import Products from "pages/Products.js";
import Product from "pages/Product.js";
import Cart from "pages/Cart.js";
import Order from "pages/Order.js";
import Result from "pages/Result.js";
import NotFound from "pages/NotFound.js";

import { expireTime } from "utils/constants";
import "App.css";

function App() {
  const dispatch = useDispatch();
  const logInTime = useSelector((state) => state.user.logInTime);

  useEffect(() => {
    if (!logInTime) return;
    const timeoutId = setTimeout(() => {
      dispatch(setEmail({ email: null }));
      dispatch(setLogInTime({ logInTime: null }));
      window.localStorage.removeItem("token");
      alert("로그인이 만료되었습니다.");
      window.location.href = "/";
    }, expireTime - (new Date().getTime() - logInTime));
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App relative">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Products />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/result/:orderId" element={<Result />} />
          </Route>
          <Route path="/test" element={<Test />} />
          {/* 잘못된 경로 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;