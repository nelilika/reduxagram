import Typography from '@mui/material/Typography';
import PostGrid from './components/Posts/PostGrid';
import './styles/styles.scss';

function App() {
  return (
    <div>
      <Typography
        variant="h1"
        component="h2"
        sx={{
          textAlign: 'center',
          fontFamily: 'Festive',
          color: 'lightBlue',
          m: '15px 0',
        }}
      >
        Reduxagram
      </Typography>
      <PostGrid />
    </div>
  );
}

export default App;
