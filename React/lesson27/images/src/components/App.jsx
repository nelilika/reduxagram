import { Component, Fragment } from 'react';
import { searchPhotos } from '../api';
import ImageList from './ImageList';
import SearchInput from './SearchInput';
import '../styles/App.css';

/* пример функционального компонента */
// function App() {
//   return <h3>Test Project</h3>;
// }

// export default App;

/* пример классового компонента */
export default class App extends Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (query) => {
    const responce = await searchPhotos(query);
    this.setState({ images: responce.data.results });
  };

  render() {
    /*return (
      <>
        <SearchInput />
        <ImageList images={this.state.images} />
      </>
    ); // тоже самое */
    return (
      <Fragment>
        <SearchInput onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </Fragment>
    );
  }
}
