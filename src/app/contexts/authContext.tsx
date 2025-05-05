import { createContext, ReactNode, useState } from 'react';

type authContextType = null | {
  data: string;
  setData: (data: string) => void;
};

export const AuthContext = createContext<authContextType>(null);

//provider ambindo o contexto com o componente
//context recebo informacoes do provider
type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [data, setData] = useState('ciclano');
  return (
    <AuthContext.Provider value={{ data, setData }}>
      {children}
    </AuthContext.Provider>
  );
};
