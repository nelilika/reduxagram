import { useEmployeeContext } from '../context/context';
import CandidateInput from './UI/input/CandidateInput';
import CandidateButton from './UI/button/CandidateButton';
import { v4 as uuidv4 } from 'uuid';
import { addEmployee, toggleModal } from '../reducer/employeeReducer';
import { faker } from '@faker-js/faker';
import { useForm } from 'react-hook-form';
import { newCandidateSchema } from '../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function NewCandidate() {
  const [, dispatch] = useEmployeeContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      company: 'Hillel',
    },
    mode: 'onBlur',
    resolver: yupResolver(newCandidateSchema),
  });

  const onSubmit = (candidate) => {
    const newCandidate = {
      ...candidate,
      guid: uuidv4(),
      picture: faker.image.cats(),
    };

    dispatch(addEmployee(newCandidate));
    dispatch(toggleModal());
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CandidateInput {...register('name')} label="Name" />
      {errors.name && <span>{errors?.name?.message}</span>}
      <CandidateInput {...register('company')} label="Company" />
      {errors.company && <span>{errors?.company?.message}</span>}
      <CandidateInput {...register('phone')} label="Phone" />
      {errors.phone && <span>{errors?.phone?.message}</span>}

      <h4>Gender</h4>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            {...register('gender')}
            value="female"
            control={<Radio />}
            label="Female"
          />
          <FormControlLabel
            {...register('gender')}
            value="male"
            control={<Radio />}
            label="Male"
          />
          <FormControlLabel
            {...register('gender')}
            value="other"
            control={<Radio />}
            label="Other"
          />
        </RadioGroup>
      </FormControl>
      <br />

      <CandidateButton type="submit">Add new Candidate</CandidateButton>
    </form>
  );
}

export default NewCandidate;
