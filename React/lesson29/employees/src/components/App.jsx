import { useEffect, useState } from 'react';
import Candidates from './Candidates';
import NewCandidate from './NewCandidate';
import SearchCandidate from './SearchCandidate';
import CandidateService from '../services/candidates.service';
import { useEmployeeContext } from '../context/context';
import { loadedEmployee, toggleModal } from '../reducer/employeeReducer';
import CandidateButton from './UI/button/CandidateButton';
import CandidateModal from './UI/modal/Modal';

function App() {
  const [, dispatch] = useEmployeeContext();

  useEffect(() => {
    CandidateService.getCandidates().then((data) =>
      dispatch(loadedEmployee(data))
    );
  }, []);

  const handleOpen = (e) => {
    dispatch(toggleModal());
  };

  return (
    <>
      <h1>Candidates list</h1>
      <SearchCandidate />
      <CandidateButton onClick={handleOpen}>Open modal</CandidateButton>
      <hr />
      <CandidateModal>
        <NewCandidate />
      </CandidateModal>
      <Candidates />
    </>
  );
}

export default App;
