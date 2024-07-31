import Fiz from "../assets/imgs/variantSelect/Физ.png";
import Lowyr from "../assets/imgs/variantSelect/Юрд.png";
import Money from "../assets/imgs/variantSelect/Валюта.png";
import Premium from "../assets/imgs/variantSelect/Вип.png";
import ItemLink from "./cardItem";

const MainBlock: React.FC = () => {
  return (
    <div className="blocks">
      <div>
        <ItemLink
          img={Fiz}
          link="/fizFace"
          title="Обслуживание физических лиц"
          description="Открытие Закрытие счета Взять ипотеку Мобильное приложение"
        />

        <ItemLink
          img={Premium}
          link="/getTalon"
          isPrem={true}
          title="Премиум клиент"
          description="Открытие Закрытие счета, Взять ипотеку, Мобильное приложение"
        />
      </div>
      <div>
        <ItemLink
          img={Money}
          link="/currency"
          title="Деньги"
          description="Купить валюту, Пополнение Снятие с счета, Просмотр курса"
        />
        <ItemLink
          img={Lowyr}
          link="/lowyer"
          title="Обслуживание юридических лиц"
          description="Открытие Закрытие счета Взять ипотеку Мобильное приложение"
        />
      </div>
    </div>
  );
};

export default MainBlock;
