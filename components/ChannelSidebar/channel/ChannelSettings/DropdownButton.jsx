import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
export default function DropdownButton({
  icon,
  name,
  mutation,
  variables,
  update,
  hotkey,
  id,
}) {
  const [mutate, { data }] = useMutation(mutation);
  const mutateChannel = () => {
    mutate({ variables: variables });
  };
  return (
    <>
      <div
        onClick={mutateChannel}
        data-id={id}
        className="hover:bg-primary-superlight first:mt-0 mt-2  relative z-50"
      >
        <div className=" flex w-10/12 mx-auto items-center justify-between text-primary-dark text-lg">
          <div className="flex items-center  py-1">
            <p>{icon}</p>
            <p className="ml-1 text-sm font-semibold">{name}</p>
          </div>
          <p className="text-base text-primary">{hotkey}</p>
        </div>
      </div>
    </>
  );
}

DropdownButton.propTypes = {
  title: PropTypes.string,
  hotkey: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.element,
  name: PropTypes.string,
  mutation: PropTypes.func,
  variables: PropTypes.object,
  update: PropTypes.func,
};
