import React from "react";

export interface Props {
  img: string;
  price: number;
  currency: string;
}

const CurrencyItem: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="currencyItem">
        <img src={props.img} width="55" height="35" alt="Валюта" />
        <div className="titleCours">
          <h1>{props.currency} RUB</h1>
          <h2>{props.price}</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CurrencyItem;
