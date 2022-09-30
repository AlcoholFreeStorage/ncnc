import styled from "@emotion/styled";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);

  const [loginError, setLoginError] = useState("");

  const router = useRouter();

  const onChange = useCallback((e: any) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
      if (value.length > 0) {
        setIsEmail(true);
      } else {
        setIsEmail(false);
      }
    } else if (name === "password") {
      setPassword(value);
      if (value.length > 0) {
        setIsPassword(true);
      } else {
        setIsPassword(false);
      }
    }
  }, []);

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Container>
      <h2 className="a11y-hidden">이메일로 로그인</h2>
      <Img src="/images/text/mainTit.png" alt="logo" />
      <LoginContainer>
        <Title className="a11y-hidden">로그인</Title>
        <Form onSubmit={login}>
          <Label>
            <Input
              name="email"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="이메일"
            ></Input>
          </Label>
          <Label>
            <Input
              name="password"
              type="password"
              id="password"
              value={password}
              onChange={onChange}
              placeholder="비밀번호"
            ></Input>
            {loginError && <Error className="error">*{loginError}</Error>}
          </Label>
          <Button disabled={!(isEmail && isPassword)}>로그인</Button>
        </Form>
      </LoginContainer>
      <SocialContainer>
        <Button color="#FEE500" name="/images/kakao.svg">
          카카오 계정으로 로그인
        </Button>
      </SocialContainer>
      <SignupLink>
        <li>
          아직 계정이 없으신가요? <Link href="/signup">회원가입</Link>
        </li>
      </SignupLink>
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
  padding-top: 170px;
  background: ${({ theme }) => theme.color.primary};
`;

const Img = styled.img`
  width: 120px;
  height: 85px;
  display: block;
  margin: 0 auto;
`;

const Title = styled.h3`
  font-size: 24px;
  line-height: 30px;
  margin: 30px 0 40px;
  text-align: center;
`;

const Form = styled.form`
  width: 310px;
`;

const Label = styled.label`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  color: #767676;
  font-size: 12px;
  line-height: 15px;
`;

const SubText = styled.span`
  margin-bottom: 10px;
`;

const Input = styled.input`
  height: 55px;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  padding: 0 20px;
  box-shadow: 1px 0px 5px 1px #8e8e9331;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #3c3c435b;
  }
`;

const Error = styled.span`
  &.success {
    display: none;
  }
  &.error {
    display: block;
  }
`;

const LoginContainer = styled.article`
  bottom: 0;
  width: 330px;
  margin: 0 auto;
  padding: 50px 0 40px;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #767676;
  border-bottom: 1px solid #fff;
`;

const Button = styled.button`
  border-radius: 6px;
  border: 0;
  color: #fff;
  height: 50px;
  width: 310px;
  position: relative;
  font-size: 18px;
  cursor: pointer;
  background: ${({ theme }) => theme.color.secondary};
  background: ${(props) => props.color};
  &::before {
    content: "";
    position: absolute;
    top: 13px;
    left: 60px;
    width: 24px;
    height: 22px;
    background: url("${(props) => props.name}");
  }
`;

const SocialContainer = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 12px;
  line-height: 15px;
  margin-top: 40px;
  button {
    cursor: pointer;
    color: #000;
    font-size: 15px;
    padding: 0 0 0 30px;
  }
  .login {
    position: relative;
  }
  .login::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 12px;
    border-right: 1px solid #c4c4c4;
    display: inline-block;
    top: 2px;
    left: 99px;
  }
`;

const SignupLink = styled.ul`
  font-size: 13px;
  li {
    margin: 30px auto;
    text-align: center;
    a {
      color: #fff;
    }
  }
`;
