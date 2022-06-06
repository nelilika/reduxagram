import classes from './CandidateButton.module.css';

const CandidateButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.CandidateButton}>
      {children}
    </button>
  );
};

export default CandidateButton;
