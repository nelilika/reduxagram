import React, { useContext } from 'react';
import CandidateInput from './UI/input/CandidateInput';
import MainContext from '../context/context';

function SearchCandidate() {
  const { search, setSearch } = useContext(MainContext);

  return (
    <CandidateInput
      type="text"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      placeholder="Search candidate..."
      name="search"
    />
  );
}

export default SearchCandidate;
