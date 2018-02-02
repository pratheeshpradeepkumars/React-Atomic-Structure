import React from 'react';

const Paragraph = props => (
    <p>{props.text}</p>
);

Paragraph.prototype = {
   text: React.PropTypes.string.isRequired
};

export default Paragraph;