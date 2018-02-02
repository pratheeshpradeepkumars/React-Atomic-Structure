import React from 'react';

const Title = props => (
  <h1>{props.text}</h1>
);

Title.prototype = {
  text: React.PropTypes.string.isRequired
};

export default Title;
