import React, { useState } from "react";

import MenuComponent from "./MenuComponent";
import PPComponent from "./PPComponent";

const MenuModal = ({ setMenuToggle }) => {
  const [contentToggle, setContentToggle] = useState(1);

  return (
    <div className="menu-section">
      {contentToggle === 1 && (
        <MenuComponent
          setMenuToggle={setMenuToggle}
          setContentToggle={setContentToggle}
        />
      )}

      {contentToggle === 2 && (
        <PPComponent setContentToggle={setContentToggle} />
      )}
    </div>
  );
};

export default MenuModal;
