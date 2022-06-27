import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PostPagination({ count, currentPage }) {
  const [page, setPage] = React.useState(currentPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    </Stack>
  );
}
