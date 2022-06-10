import { Component, createRef } from 'react';

const GRID_ROW_HEIGHT = 10;

export default class ImageItem extends Component {
  constructor() {
    super();
    this.state = { span: 0 };

    this.imageRef = createRef();
  }

  componentDidMount() {
    // this.imageRef.current - ccылка на DOM элемент каждой картинки в цикле
    this.imageRef.current.addEventListener('load', this.setSpan);
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    this.setState({ span: Math.ceil(height / GRID_ROW_HEIGHT) });
  };

  render() {
    const {
      urls: { regular: src },
      alt_description: alt,
    } = this.props.image;
    return (
      <img
        style={{
          gridRowEnd: `span ${this.state.span}`,
        }}
        ref={this.imageRef}
        src={src}
        alt={alt}
      />
    );
  }
}
