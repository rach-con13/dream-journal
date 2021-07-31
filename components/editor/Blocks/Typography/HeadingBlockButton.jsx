import React from 'react';
import { WithToggle } from '../../../../hooks/withToggle';
import BlockButton from '../../../../lib/slate/slateButtons/blockButton';
import { BiHeading } from 'react-icons/bi';

export default function HeadingBlockButton(props) {
  const { open, toggle } = WithToggle();
  return (
    <div className="relative flex items-center">
      <button className="ml-2 font-bold" onClick={toggle}>
        <BiHeading />
      </button>
      {open ? (
        <div className="absolute top-0 flex items-center p-2  bg-primary-superdark rounded-sm font-bold text-primary-superlight mt-8 z-50 shadow-sm">
          <BlockButton
            {...props}
            format="h1"
            icon={<p className="text-center ">H1</p>}
          />
          <BlockButton {...props} format="h2" icon={<p>H2</p>} />
          <BlockButton {...props} format="h3" icon={<p>H3</p>} />
          <BlockButton {...props} format="h4" icon={<p>H4</p>} />
        </div>
      ) : null}
    </div>
  );
}
