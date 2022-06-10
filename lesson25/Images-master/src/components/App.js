import React, { Component } from 'react';
import SearchInput from './SearchInput';
import ImageList from './ImageList';
import { searchPhotos } from '../api/unsplash';
import '../styles/App.css';

export default class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (query) => {
    const response = await searchPhotos(query);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <React.Fragment>
        <SearchInput onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </React.Fragment>
    );
  }
}
