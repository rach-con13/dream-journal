import React from 'react';

export default function HeadingBlock({ size, attributes, children }) {
  return (
    <p className={`${size} font-bold `} {...attributes}>
      {children}
    </p>
  );
}
