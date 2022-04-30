import styled from "styled-components";
import { human_icon } from "../assets";
import MainForm from "../components/MainForm";
import MainHeader from "../components/MainHeader";

const Main = () => {
  return (
    <>
      <MainHeader />
      <Section>
        <img src={human_icon} alt="" />
        <MainForm />
      </Section>
    </>
  );
};

const Section = styled.section`
  display: flex;
  gap: 250px;
  margin-top: 180px;
  margin-left: 300px;
`;

export default Main;
