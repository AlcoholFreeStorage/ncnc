import styled from "@emotion/styled";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";

export const JoinPage = () => {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");

  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [isPasswordCheck, setIsPasswordCheck] = useState(false);
  const [passwordCheckMessage, setPasswordCheckMessage] = useState("");

  const [nickname, setNickname] = useState("");
  const [isNickname, setIsNickname] = useState(false);
  const [nicknameMessage, setNicknameMessage] = useState("");

  const onChange = useCallback((e: any) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") {
      setEmail(value);
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      if (!emailRegex.test(value)) {
        setEmailMessage("올바르지 않은 이메일 형식입니다.");
        setIsEmail(false);
      } else {
        setIsEmail(true);
      }
    } else if (name === "password") {
      setPassword(value);
      const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
      if (!passwordRegex.test(value)) {
        setPasswordMessage(
          "비밀번호는 8자 이상 영문과 숫자의 조합이어야 합니다."
        );
        setIsPassword(false);
      } else {
        setIsPassword(true);
      }
    } else if (name === "passwordCheck") {
      setPasswordCheck(value);
      if (password !== passwordCheck) {
        setIsPasswordCheck(true);
      } else {
        setIsPasswordCheck(false);
        setPasswordCheckMessage("비밀번호가 일치하지 않습니다.");
      }
    } else if (name === "nickname") {
      setNickname(value);
      if (value.length > 0) {
        setIsNickname(true);
      } else {
        setIsNickname(false);
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
          {email.length > 0 && (
            <Error className={`${isEmail ? "success" : "error"}`}>
              *{emailMessage}
            </Error>
          )}
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
          {password.length > 0 && (
            <Error className={`${isPassword ? "success" : "error"}`}>
              *{passwordMessage}
            </Error>
          )}
        </Label>
        <Label>
          <Input
            name="passwordCheck"
            type="password"
            id="passwordCheck"
            placeholder="비밀번호 확인"
            value={passwordCheck}
            onChange={onChange}
          ></Input>
          {passwordCheck.length > 0 && (
            <Error className={`${isPasswordCheck ? "success" : "error"}`}>
              *{passwordCheckMessage}
            </Error>
          )}
        </Label>
        <Label>
          <Input
            name="nickname"
            type="text"
            id="nickname"
            placeholder="닉네임"
            value={nickname}
            onChange={onChange}
          ></Input>
          {nickname.length > 0 && (
            <Error className={`${isNickname ? "success" : "error"}`}>
              *{nicknameMessage}
            </Error>
          )}
        </Label>
        <Button
          disabled={!(isEmail && isPassword && isPasswordCheck && isNickname)}
        >
          회원가입
        </Button>
      </Form>
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

const Form = styled.form`
  width: 310px;
  margin: 33px auto 0;
`;

const Label = styled.label`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  color: #767676;
  font-size: 12px;
  line-height: 15px;
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
  &:disabled {
    opacity: 0.5;
  }
`;

const Error = styled.span`
  &.success {
    display: none;
  }
  &.error {
    display: block;
    margin: 15px 0 0;
    color: ${({ theme }) => theme.color.alert};
  }
`;
