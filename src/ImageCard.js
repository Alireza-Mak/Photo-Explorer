/** @format */

import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10)+3;

    this.setState({ spans });
  };

  render() {
    const { description, urls, links } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <a href={links.html}>
          <img ref={this.imageRef} alt={description} src={urls.regular} />
        </a>
      </div>
    );
  }
}

export default ImageCard;
