import { useState, useEffect, useMemo, useRef } from 'react';
import Candidates from './Candidates';
import NewCandidate from './NewCandidate';
import SearchCandidate from './SearchCandidate';
import MainContext from '../context/context';
import { v4 as uuidv4 } from 'uuid';
import CandidatesService from '../services/candidates.service';
import CandidateButton from './UI/button/CandidateButton';

function App() {
  const [counter, setCounter] = useState(0);
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState('');
  const refInput = useRef('');

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  }, [counter]);

  useEffect(() => {
    CandidatesService.getCandidates().then((data) => setCandidates(data));
    console.log('here');
  }, []);

  const filteredCandidate = useMemo(() => {
    if (!search) {
      return candidates;
    }
    return candidates.filter((candidate) => candidate.name.includes(search));
  }, [candidates, search]);

  const removeCandidate = function (guid) {
    const newCandidates = candidates.filter(
      (candidate) => candidate.guid !== guid
    );
    setCandidates(newCandidates);
  };

  const addNewCandidate = function (data) {
    const newCandidate = {
      ...data,
      guid: uuidv4(),
    };
    setCandidates([newCandidate, ...candidates]);
  };

  const removeBtn = function (event) {
    event.target.style.display = 'none';
  };

  return (
    <MainContext.Provider
      value={{
        candidates,
        filteredCandidate,
        search,
        setSearch,
        addNewCandidate,
        removeCandidate,
      }}
    >
      <h1>Candidates list</h1>
      <SearchCandidate />
      <hr />
      <NewCandidate />
      <Candidates />
    </MainContext.Provider>
  );
}

export default App;
