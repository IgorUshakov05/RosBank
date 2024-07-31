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
          text="Открытие / Закрытие счета"
          id={1}
          onSelect={handleSelect}
        />
        <CurrencyBlockItem
          active={selectedItem}
          text="Получить справку о наличии счета"
          id={2}
          onSelect={handleSelect}
        />
        <CurrencyBlockItem
          active={selectedItem}
          text="Справка о службе в гос. структуре"
          id={3}
          onSelect={handleSelect}
        />
        <CurrencyBlockItem
          active={selectedItem}
          text="Справка об отсутствии задолжности"
          id={4}
          onSelect={handleSelect}
        />
      </div>
      <div>
        <CurrencyBlockItem
          active={selectedItem}
          text="Взять ипотеку"
          id={5}
          onSelect={handleSelect}
        />
        <CurrencyBlockItem
          active={selectedItem}
          text="Мобильное приложение"
          id={6}
          onSelect={handleSelect}
        />
        <CurrencyBlockItem
          active={selectedItem}
          text="Переоформление пенсии"
          id={7}
          onSelect={handleSelect}
        />
        <CurrencyBlockItem
          active={true}
          text="Другое..."
          id={8}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
};

export default CurrencyBlock;
