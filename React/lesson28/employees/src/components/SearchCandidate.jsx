import React, { useState } from 'react';
import CandidateInput from './UI/input/CandidateInput';
import { useEmployeeContext } from '../context/context';
import { filterEmployee } from '../reducer/employeeReducer';

function SearchCandidate() {
  const [search, setSearch] = useState('');
  const [, dispatch] = useEmployeeContext();

  const onSearch = function ({ target: { value: searchInput } }) {
    setSearch(searchInput);
    dispatch(filterEmployee(searchInput));
  };

  return (
    <CandidateInput
      type="text"
      value={search}
      onChange={onSearch}
      placeholder="Search candidate..."
      name="search"
    />
  );
}

export default SearchCandidate;
