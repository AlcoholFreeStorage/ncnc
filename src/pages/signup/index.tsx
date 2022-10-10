import type { NextPage } from "next";
import { JoinPage } from "../../component/singup/SignUpPage";

const Login: NextPage = () => {
  return (
    <section>
      <h1 className="a11y-hidden">회원가입 페이지</h1>
      <JoinPage />
    </section>
  );
};

export default Login;
