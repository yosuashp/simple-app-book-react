import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

// Buat konteks
interface IPrivateContext {
  username?: string;
}

const PrivateContext = createContext<IPrivateContext | undefined>(undefined);

export function usePrivateContext() {
  const context = useContext(PrivateContext);
  if (!context) {
    throw new Error('usePrivateContext must be used within a PrivateProvider');
  }
  return context;
}

export default function PrivateProvider({ children }: PropsWithChildren) {
  const [show, setShow] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      window.location.href = '/login';
    } else {
      setShow(true);
    }
  }, [token]);

  const contextValue: IPrivateContext = { username: 'sahat' };

  if (show) {
    return <PrivateContext.Provider value={contextValue}>{children}</PrivateContext.Provider>;
  }

  return <></>;
}
