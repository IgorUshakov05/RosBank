import { Link } from "react-router-dom";
import TalonStore from "../stores/talonStore";

export interface Props {
  title: string;
  description: string;
  img: string;
  isPrem?: boolean;
  link: string;
}

const ItemLink: React.FC<Props> = (props) => {
  const handleClick = () => {
    
    if (props.isPrem) {
      TalonStore.setCurrencyData("П");
    }
  };

  return (
    <Link to={props.link} onClick={handleClick} className="card">
      <div className="infoOfSelect">
        <h1 className="titleVariant">{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className="selectPic">
        <img className="selectPicItem" src={props.img} alt="Вариант" />
      </div>
    </Link>
  );
};

export default ItemLink;
