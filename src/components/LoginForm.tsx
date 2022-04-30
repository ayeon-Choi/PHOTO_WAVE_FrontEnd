import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginForm = () => {
  return (
    <Wrapper>
      <p>PhotoWave</p>
      <InputWrapper>
        <InputBox>
          <p>이메일</p>
          <input placeholder="이메일을 입력해주세요" />
        </InputBox>
        <InputBox>
          <p>닉네임</p>
          <input placeholder="닉네임을 입력해주세요" />
        </InputBox>
      </InputWrapper>
      <ButtonWrapper>
        <button>로그인</button>
        <Link to="/signup">아직 계정이 없으신가요?</Link>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-top: 135px;

  & > p {
    font-size: 32px;
    color: #1b1383;
    font-weight: bold;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > p {
    font-size: 24px;
    color: #4b3dfe;
    font-weight: bold;
  }

  & > input {
    width: 350px;
    padding-left: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #4b3dfe;
    font-size: 24px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  & > button {
    width: 250px;
    height: 65px;
    border-radius: 40px;
    background-color: #4b3dfe;
    font-size: 24px;
    color: white;
    font-weight: bold;
  }

  & > a {
    font-size: 14px;
    color: #4b3dfe;
    text-decoration: underline;
  }
`;

export default LoginForm;
