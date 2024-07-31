import React, { useState } from "react";
import CurrencyBlockItem from "./currencyVariantItem";

const CurrencyBlock: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const handleSelect = (id: number) => {
    setSelectedItem(id);
    console.log(`Selected item: ${id}`);
  };

  return (
    <div className="blocks">
      <div>
        <CurrencyBlockItem
          active={selectedItem}
          text="Снять или внести деньги на счет"
          id={1}
          onSelect={handleSelect}
        />
        <CurrencyBlockItem
          active={selectedItem}
          text="Оплата обучения или других услуг"
          id={2}
          onSelect={handleSelect}
        />
      </div>
      <div>
        <CurrencyBlockItem
          active={selectedItem}
          text="Обмен валют"
          id={3}
          onSelect={handleSelect}
        />
        <CurrencyBlockItem
          active={selectedItem}
          text="Сдать испорченные купюры"
          id={4}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
};

export default CurrencyBlock;
