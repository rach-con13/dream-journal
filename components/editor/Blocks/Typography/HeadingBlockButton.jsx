import React from 'react';
import { WithToggle } from '../../../../hooks/withToggle';
import BlockButton from '../../../../lib/slate/slateButtons/blockButton';
import { BiHeading } from 'react-icons/bi';
export default function HeadingBlockButton(props) {
  const { open, toggle } = WithToggle();
  return (
    <>
      <button className="ml-2 font-bold" onClick={toggle}>
        <BiHeading />
      </button>
      {open ? (
        <div>
          <BlockButton {...props} format="h1" icon={<p>H1</p>} />
          <BlockButton {...props} format="h2" icon={<p>H2</p>} />
          <BlockButton {...props} format="h3" icon={<p>H3</p>} />
          <BlockButton {...props} format="h4" icon={<p>H4</p>} />
        </div>
      ) : null}
    </>
  );
}
