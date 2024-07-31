import React from "react";
import logo from "../../assets/imgs/logo.svg";
import Currency from "../currency";
export interface Props {
  type: string;
  text: string;
}
const Header: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <header className={props.text && "normalHeader"}>
        <div className="logo">
          <img src={logo} alt="Валюта" />
        </div>
        {props.type === "currency"&& (
          <Currency />
        )}
        {props.type === "text" && (
          <p className="textOfHeader">{props.text}</p>
        )}
      </header>
    </React.Fragment>
  );
};

export default Header;
