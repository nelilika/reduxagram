import classes from './CandidateButton.module.css';
import Button from '@mui/material/Button';

const CandidateButton = ({ children, ...props }) => {
  return (
    <Button variant="contained" {...props} className={classes.CandidateButton}>
      {children}
    </Button>
  );
};

export default CandidateButton;
