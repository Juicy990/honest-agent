import React from "react";

import "./Footer.scss";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        © 1992 - 2020 Честный Агент © Все права защищены.
      </div>
      <div className="footer__info">8 (495) 150-21-12</div>
    </div>
  );
};
