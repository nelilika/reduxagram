import React, { Component } from 'react';
import ImageItem from './ImageItem';

class ImageList extends Component {
  render() {
    return (
      <div className="image-list">
        {this.props.images.map((image) => (
          <ImageItem key={image.id} image={image} />
        ))}
      </div>
    );
  }
}

export default ImageList;
