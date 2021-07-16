import { useState } from 'react';

export const WithToggle = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return { open, setOpen, toggle };
};
