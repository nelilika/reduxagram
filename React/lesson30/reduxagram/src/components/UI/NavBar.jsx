import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

function LinkTab(props) {
  return <Tab component={Link} {...props} />;
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Posts" to="/posts" />
        <LinkTab label="Examples" to="/example" />
        <LinkTab label="Login" to="/login" />
      </Tabs>
    </Box>
  );
}
