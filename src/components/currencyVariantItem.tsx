import React from "react";
import {Link} from 'react-router-dom'

interface Props {
  text: string;
  id: number;
  active: number|boolean;
  onSelect: (id: number) => void;
}

const CurrencyBlockItem: React.FC<Props> = (props) => {
  const handleClick = () => {
    props.onSelect(props.id);
  };

  const isActive = props.active === props.id;

  if(props.active === true) {
    return (
    <React.Fragment>
    <Link
      to={'/getTalon'}
      onClick={handleClick}
      className="itemMethonOfCurrency card default"
      >
      <p className="relative">{props.text}</p>
    </Link>
      </React.Fragment>
  );
  }
  return (
    <React.Fragment>

    <Link
      to={isActive?'/getTalon':'#'}
      onClick={handleClick}
      className={
        isActive
        ? "itemMethonOfCurrency card active"
        : "itemMethonOfCurrency card"
      }
      >
      <p className="relative">{props.text}</p>
    </Link>
      </React.Fragment>
  );
};

export default CurrencyBlockItem;
