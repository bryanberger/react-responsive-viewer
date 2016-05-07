import React, { PropTypes } from 'react';

export default class Frame extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }

  render() {
    return (
      <li className="frame">
        <h3>{this.props.title}</h3>
        <iframe
          width={this.props.width}
          height={this.props.height}
          src={this.props.src}
          sandbox="allow-same-origin allow-forms allow-scripts"
          seamless="true">
        </iframe>
      </li>
    );
  }
}
