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
  position: relative;
  top: 180px;
  left: 300px;
`;

export default Main;
