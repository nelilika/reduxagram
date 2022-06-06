import { useContext } from 'react';
import './Candidate.css';
import MainContext from '../context/context';

function Candidate({ candidate }) {
  const { removeCandidate } = useContext(MainContext);
  return (
    <div className="item">
      <button className="close" onClick={() => removeCandidate(candidate.guid)}>
        x
      </button>
      <p className="name">{candidate.name}</p>
      <p>
        <span>Company: </span>
        <i>{candidate.company}</i>
      </p>
      <p>
        <span>Phone: </span>
        <a className="phone" href={`tel:${candidate.phone}`}>
          {candidate.phone}
        </a>
      </p>
      <p>
        <span>Email: </span>
        <a className="email" href={`mailto:${candidate.email}`}>
          {candidate.email}
        </a>
      </p>
      <p>
        <span>Gender: </span>
        <span className="gender">
          {candidate.gender === 'male' ? '\uD83D\uDC68' : '\uD83D\uDC69'}
        </span>
      </p>
      <ul>
        {candidate.tags &&
          candidate.tags.map((tag, i) => <li key={i}>{tag}</li>)}
      </ul>
    </div>
  );
}

export default Candidate;
