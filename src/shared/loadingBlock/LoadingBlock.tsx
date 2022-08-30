import React from "react";
import loader from "../../img/loader/loader.gif";
import "./LoadingBlock.scss";

export const LoadingBlock: React.FC = () => {
  return (
    <div className="loading">
      <div className="loading-text">Загрузка...</div>
      <div className="loading-loader">
        <img src={loader} alt="Loading" />
      </div>
    </div>
  );
};
