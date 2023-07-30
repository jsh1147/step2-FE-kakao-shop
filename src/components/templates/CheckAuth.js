import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function CheckAuth() {
  const navigate = useNavigate();
  const auth = window.localStorage.getItem("token");

  useEffect(() => {
    if (!auth)
      if (window.confirm("로그인이 필요한 메뉴입니다.\n로그인 하시겠습니까?"))
        navigate("/login");
      else navigate(-1);
  }, [auth, navigate]);

  return auth && <Outlet />;
}