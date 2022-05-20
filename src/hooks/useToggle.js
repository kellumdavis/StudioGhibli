import { useState } from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  console.log(setIsOpen);
  return { isOpen, toggle };
};

export default useToggle;
