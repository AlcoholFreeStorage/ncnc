import type { NextPage } from "next";
// import Head from "next/head";
import { LoginPage } from "../../component/login/LoginPage";

const Login: NextPage = () => {
  return (
    <section>
      <h1 className="a11y-hidden">로그인 페이지</h1>
      <LoginPage />
    </section>
  );
};

export default Login;
