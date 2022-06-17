import './App.css';
import { useState } from 'react';
import { useEmployeeContext } from '../context/context';
import CandidateInput from './UI/input/CandidateInput';
import CandidateButton from './UI/button/CandidateButton';
import { v4 as uuidv4 } from 'uuid';
import { addEmployee } from '../reducer/employeeReducer';
import { faker } from '@faker-js/faker';

function NewCandidate() {
  const [candidate, setCandidate] = useState({
    name: '',
    company: '',
  });
  const [, dispatch] = useEmployeeContext();

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

    const newCandidate = {
      ...candidate,
      guid: uuidv4(),
      picture: faker.image.cats(),
    };

    dispatch(addEmployee(newCandidate));

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
