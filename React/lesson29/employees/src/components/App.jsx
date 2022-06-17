import { useState, useEffect, useMemo } from 'react';
import Candidates from './Candidates';
import NewCandidate from './NewCandidate';
import SearchCandidate from './SearchCandidate';
import CandidateService from '../services/candidates.service';
import { useEmployeeContext } from '../context/context';
import { loadedEmployee } from '../reducer/employeeReducer';

function App() {
  const [, dispatch] = useEmployeeContext();

  useEffect(() => {
    CandidateService.getCandidates().then((data) =>
      dispatch(loadedEmployee(data))
    );
  }, []);

  return (
    <>
      <h1>Candidates list</h1>
      <SearchCandidate />
      <hr />
      <NewCandidate />
      <Candidates />
    </>
  );
}

export default App;
