import React from 'react';
import PropTypes from 'prop-types';
export default function HeadingBlock({ size, attributes, children }) {
  return (
    <p className={`${size} font-bold `} {...attributes}>
      {children}
    </p>
  );
}

HeadingBlock.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
  attributes: PropTypes.object,
};
