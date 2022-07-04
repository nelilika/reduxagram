import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PostPagination({ page, count, changePage }) {
  return (
    <Stack spacing={2} sx={{ alignItems: 'center', p: '10px' }}>
      <Pagination count={count} page={page} onChange={changePage} />
    </Stack>
  );
}
