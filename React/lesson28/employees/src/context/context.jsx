import { useContext } from 'react';
import { createContext, useReducer } from 'react';
import { initialState, employeeReducer } from '../reducer/employeeReducer';

const EmployeeContext = createContext(null);

export const EmployeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(employeeReducer, initialState);

  return (
    <EmployeeContext.Provider value={[state, dispatch]}>
      {children}
    </EmployeeContext.Provider>
  );
};

export function useEmployeeContext() {
  return useContext(EmployeeContext);
}
