import { ReactNode, createContext } from "react";

export type TodoProviderProps = {
  children: ReactNode;
};

export const todosContext = createContext(null);

export const todoProvider = ({ children }: TodoProviderProps) => {
  return <todosContext.Provider>{children}</todosContext.Provider>;
};
