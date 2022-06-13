import './App.css';
import { useState, useContext } from 'react';
import MainContext from '../context/context';
import CandidateInput from './UI/input/CandidateInput';
import CandidateButton from './UI/button/CandidateButton';

function NewCandidate() {
  const [candidate, setCandidate] = useState({
    name: '',
    company: '',
  });
  const { addNewCandidate } = useContext(MainContext);

  const changeCandidate = function (event) {
    setCandidate({
      ...candidate,
      [event.target.name]: event.target.value,
    });
  };

  const setNewValues = function () {
    if (Object.values(candidate).some((value) => !value)) {
      return;
    }
    addNewCandidate(candidate);
    setCandidate({
      name: '',
      company: '',
    });
  };

  return (
    <div>
      <CandidateInput
        type="text"
        value={candidate.name}
        onChange={changeCandidate}
        placeholder="Name"
        name="name"
      />
      <CandidateInput
        type="text"
        value={candidate.company}
        onChange={changeCandidate}
        placeholder="Company"
        name="company"
      />
      <CandidateButton onClick={setNewValues}>
        Add new Candidate
      </CandidateButton>
    </div>
  );
}

export default NewCandidate;
