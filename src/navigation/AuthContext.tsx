import React from 'react';

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
};

const AuthContext = React.createContext<AuthContextType>(
  null as unknown as AuthContextType
);

export const AuthContextProviver: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isAuth, setIsAuth] = React.useState(false);

  const context = React.useMemo(
    () => ({ isAuth, setIsAuth }),
    [isAuth, setIsAuth]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);
