import React, { useState } from "react";

import Sidebar from "../Components/Sidebar";

const useToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };
console.log(setIsOpen)
    return (
        {isOpen, toggle}
    );
};

export default useToggle;