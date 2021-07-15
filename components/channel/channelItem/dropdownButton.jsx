import React from 'react';
import PropTypes from 'prop-types';
export default function DropdownButton({ icon, name, hotkey, onClick }) {
  return (
    <div
      onClick={onClick}
      className="hover:bg-primary-superlight first:mt-0 mt-2"
    >
      <div className=" flex w-10/12 mx-auto items-center justify-between text-primary-dark text-lg">
        <div className="flex items-center  py-1">
          <p>{icon}</p>
          <p className="ml-1 text-sm font-semibold">{name}</p>
        </div>
        <p className="text-base text-primary">{hotkey}</p>
      </div>
    </div>
  );
}

DropdownButton.propTypes = {
  icon: PropTypes.element,
  name: PropTypes.string,
  onClick: PropTypes.func,
  hotkey: PropTypes.string,
};
