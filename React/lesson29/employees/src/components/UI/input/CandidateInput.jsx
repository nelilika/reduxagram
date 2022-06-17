import TextField from '@mui/material/TextField';

const CandidateInput = (props) => {
  return (
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      {...props}
      sx={{
        m: '10px',
      }}
      type="text"
    />
  );
};

export default CandidateInput;
