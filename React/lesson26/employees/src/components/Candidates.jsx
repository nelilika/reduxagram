import './Candidates.css';
import { useContext } from 'react';
import Candidate from './Candidate';
import MainContext from '../context/context';

function Candidates() {
  const { filteredCandidate } = useContext(MainContext);

  return (
    <div className="container">
      {filteredCandidate.map((candidate) => (
        <Candidate key={candidate.guid} candidate={candidate} />
      ))}
    </div>
  );
}

export default Candidates;
