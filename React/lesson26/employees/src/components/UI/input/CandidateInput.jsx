import classes from './CandidateInput.module.css';

const CandidateInput = (props) => {
  return <input {...props} className={classes.CandidateInput} type="text" />;
};

export default CandidateInput;
