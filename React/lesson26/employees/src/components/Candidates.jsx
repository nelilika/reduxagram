import './Candidates.css';
import { useState } from 'react';
import candidatesArr from '../data/candidates';
import Candidate from './Candidate';

function Candidates() {
  const [candidates, setCandidates] = useState(candidatesArr);

  const removeCandidate = function (guid) {
    const newCandidates = candidates.filter(
      (candidate) => candidate.guid !== guid
    );
    setCandidates(newCandidates);
  };

  const editCandidate = function (editedCandidate) {
    const editedCandidates = candidates.map((candidate) =>
      candidate.guid !== editedCandidate.guid ? candidate : editedCandidate
    );
    setCandidates(editedCandidates);
  };

  return (
    <div className="container">
      {candidates.map((candidate) => (
        <Candidate
          key={candidate.guid}
          candidate={candidate}
          removeCandidate={removeCandidate}
        />
      ))}
    </div>
  );
}

export default Candidates;
