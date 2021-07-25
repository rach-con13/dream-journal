import React from 'react';
import PropTypes from 'prop-types';
export default function ChannelEntry({ title }) {
  return (
    <div
      style={{ borderColor: '#707587' }}
      className="py-4 border-t border-solid "
    >
      <div className="w-10/12 mx-auto">
        <p className="text-base font-bold text-primary-superlight">{title}</p>
      </div>
    </div>
  );
}

ChannelEntry.propTypes = {
  title: PropTypes.string,
};
