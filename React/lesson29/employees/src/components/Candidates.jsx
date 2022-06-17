import './Candidates.css';
import Candidate from './Candidate';
import { useEmployeeContext } from '../context/context';
import Grid from '@mui/material/Grid';

function Candidates() {
  const [{ filteredCandidate }] = useEmployeeContext();

  return (
    <Grid container spacing={12}>
      {filteredCandidate.map((candidate) => (
        <Grid item xs={12} md={4} lg={3} key={candidate.guid}>
          <Candidate candidate={candidate} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Candidates;
