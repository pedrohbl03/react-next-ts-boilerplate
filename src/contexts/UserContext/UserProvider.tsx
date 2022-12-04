import React, { createContext, useContext, useState, ProviderProps } from "react";
import { IToken } from "../../interfaces";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
  tokens: {
    access_token: IToken;
    refresh_token: IToken;
  };
};

export type UserContextData = {
  user: User | null;
  setUser: (user: User) => void;
};

export type UserProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextData>({} as UserContextData);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
