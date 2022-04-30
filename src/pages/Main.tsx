import styled from 'styled-components';
import { human_icon } from '../assets';
import MainHeader from '../components/MainHeader';

const Main = () => {
  return (
    <>
      <MainHeader />
      <MainSection>
        <img src={human_icon} alt="" />
        <EmailForm>
          <p>
            PhotoWave에서
            <br />
            추억을 기록해보세요
          </p>
          <InputBox>
            <input placeholder="Email" />
            <button>Start</button>
          </InputBox>
        </EmailForm>
      </MainSection>
    </>
  );
};

const MainSection = styled.section`
  display: flex;
  gap: 250px;
  position: relative;
  top: 180px;
  left: 300px;
`;

const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-top: 100px;

  & > p {
    font-size: 32px;
    color: #1b1383;
    font-weight: bold;
    line-height: 40px;
  }
`;

const InputBox = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #dbdced;
  border-radius: 50px;

  & > input {
    padding-left: 25px;
    background: none;
    font-size: 19px;
    font-weight: bold;
  }

  & > input::placeholder {
    color: white;
  }

  & > button {
    width: 120px;
    height: 100%;
    background-color: #4b3dfe;
    border-radius: 50px;
    font-size: 22px;
    color: white;
    font-weight: bold;
  }
`;

export default Main;
