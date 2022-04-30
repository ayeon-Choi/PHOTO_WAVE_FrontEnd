import styled from "styled-components";
import { rocket_icon } from "../assets";
import MainHeader from "../components/MainHeader";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <>
      <MainHeader />
      <Section>
        <img src={rocket_icon} alt="" />
        <SignupForm />
      </Section>
    </>
  );
};

const Section = styled.section`
  display: flex;
  gap: 300px;
  margin-top: 180px;
  margin-left: 300px;
`;

export default Signup;
