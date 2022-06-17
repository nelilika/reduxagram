import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEmployeeContext } from '../context/context';
import { removeEmployee } from '../reducer/employeeReducer';

export default function Candidate({ candidate }) {
  const [, dispatch] = useEmployeeContext();

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={candidate.picture}
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {candidate.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {candidate.company}
        </Typography>
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
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button
          size="small"
          onClick={() => dispatch(removeEmployee(candidate.guid))}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
