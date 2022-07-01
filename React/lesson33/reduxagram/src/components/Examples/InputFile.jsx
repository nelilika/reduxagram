import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const InputFile = () => {
  const [image, setImage] = useState({
    src: '',
    name: '',
  });

  const { register } = useForm();

  const uploadImage = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    console.log(file);
    reader.onloadend = () => {
      console.log(reader);
      setImage({
        src: reader.result,
        name: file.name,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const fileInputRef = React.createRef();

  const chooseFile = () => fileInputRef.current.click();

  return (
    <>
      <form noValidate>
        <Box>
          <Button fullWidth onClick={chooseFile}>
            Choose File
          </Button>

          <label>
            <TextField
              sx={{ display: 'none' }}
              {...register('image')}
              onChange={uploadImage}
              type="file"
              ref={fileInputRef}
            />
          </label>

          <Typography align="center">{image.name}</Typography>
          <img
            style={{ maxWidth: 400, margin: '0 auto', display: 'block' }}
            src={image.src}
            alt={image.name}
          />
        </Box>
      </form>
    </>
  );
};

export default InputFile;
