interface CurrencyInfoItemProps {
  currencytitle: string;
  img: string;
  buy: number;
  sell: number;
}
const CurrencyInfoItem: React.FC<CurrencyInfoItemProps> = (props) => {
  return (
    <div className="currencyBlockNow">
      <div className="topInfo">
        <img className="imgCurrency" src={props.img} alt="Валюта" />
        <div className="titleCurrency">
          <p>{props.currencytitle}</p>
          <p>RUB</p>
        </div>
      </div>
      <div className="priceCurrent">
        <div className="BuyAndSalle">
          <p className="textSalleAndBuy">Купить</p>
          <p className="textSalleAndPrice">{props.buy}</p>
        </div>
        <div className="BuyAndSalle">
          <p className="textSalleAndBuy">Продать</p>
          <p className="textSalleAndPrice">{props.sell}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyInfoItem;
