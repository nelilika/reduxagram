import React, { Component } from 'react';

class ImageItem extends Component {
  constructor() {
    super();
    this.state = { span: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    this.setState({ span: Math.ceil(height / 10) });
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

export default ImageItem;
