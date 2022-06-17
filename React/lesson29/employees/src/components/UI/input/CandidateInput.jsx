import { forwardRef } from 'react';
import TextField from '@mui/material/TextField';

const CandidateInput = forwardRef((props, ref) => (
  <TextField
    id="outlined-basic"
    label={props.label}
    variant="outlined"
    {...props}
    sx={{
      m: '10px',
    }}
    type="text"
    inputRef={ref}
  />
));

export default CandidateInput;
