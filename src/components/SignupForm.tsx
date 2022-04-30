import { Link } from "react-router-dom";
import styled from "styled-components";

const SignupForm = () => {
  return (
    <Wrapper>
      <span>회원가입</span>
      <InputWrapper>
        <InputBox>
          <p>이메일</p>
          <input placeholder="이메일을 입력해주세요" />
        </InputBox>
        <InputBox>
          <p>닉네임</p>
          <input placeholder="닉네임을 입력해주세요" />
        </InputBox>
        <InputBox>
          <p>비밀번호</p>
          <input type="password" placeholder="비밀번호를 설정해주세요" />
        </InputBox>
        <InputBox>
          <p>비밀번호 확인</p>
          <input type="password" placeholder="비밀번호를 확인해주세요" />
        </InputBox>
      </InputWrapper>
      <button>회원가입</button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  position: relative;
  bottom: 50px;

  & > span {
    font-size: 32px;
    color: #4b3dfe;
    font-weight: bold;
  }

  & > button {
    width: 250px;
    height: 75px;
    border-radius: 40px;
    background-color: #4b3dfe;
    font-size: 24px;
    color: white;
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

export default SignupForm;
