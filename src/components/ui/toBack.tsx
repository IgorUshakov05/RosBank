import React from "react";
import { Link } from "react-router-dom";
const BackLink: React.FC = () => {
  return (
    <div className="blocks">
      <div>
      <Link to="/" className="itemMethonOfCurrency card backLinkText">
        Назад
      </Link>
      </div>
    </div>
  );
};

export default BackLink;
