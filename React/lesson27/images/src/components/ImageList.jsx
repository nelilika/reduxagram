import { Component } from 'react';
import ImageItem from './ImageItem';

export default class ImageList extends Component {
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
