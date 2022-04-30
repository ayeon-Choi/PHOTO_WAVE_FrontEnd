import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { photowave_logo } from '../assets';

const MainHeader = () => {
  return (
    <Wrapper>
      <img src={photowave_logo} alt="" />
      <LinkWrapper>
        <Link to="/login">Login</Link>
        <Link to="/album">Album</Link>
      </LinkWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 0 60px;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;

  & > a {
    font-size: 24px;
    color: #4b3dfe;
    font-weight: bold;
  }
`;

export default MainHeader;
