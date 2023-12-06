import styled from '@emotion/styled';
import { Button } from '@mui/material';
import PrivateProvider, { usePrivateContext } from '../providers/PrivateProvider';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  const { username } = usePrivateContext();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <PrivateProvider>
      <HomeContainer>
        <h1 style={{ marginBottom: '8rem'}}>Welcome {username}</h1>
        <Button type="button" color="error" style={{position: 'fixed'}} onClick={() => handleSignOut()}>
          Sign Out
        </Button>
      </HomeContainer>
    </PrivateProvider>
  );
}
