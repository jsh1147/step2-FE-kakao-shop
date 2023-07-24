import { useState } from "react";

import "styles/tests/Toast.css";

import cart_white from "assets/icon/cart_white.png";

export default function Toast() {
  const [visible, setVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(-1);

  function handleClick() {
    setVisible(true);
    if (timeoutId !== -1) clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        setVisible(false);
      }, 3000)
    );
  }

  return (
    <>
      <button className="toast-button" onClick={handleClick}>
        <img src={cart_white} alt="장바구니" />
      </button>
      {visible && (
        <div className="toast-div">
          <span className="toast-span">장바구니에 상품이 담겼습니다.</span>
          <a className="toast-a" href="http://localhost:3000/">
            바로가기
          </a>
        </div>
      )}
    </>
  );
}