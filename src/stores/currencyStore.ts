// src/stores/currencyStore.ts
import { makeAutoObservable } from "mobx";

class CurrencyStore {
  currencyData: { [key: string]: number[] } | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrencyData(data: { [key: string]: number[] }) {
    this.currencyData = data;
  }

  get formattedCurrencyData() {
    if (!this.currencyData) return null;
    return Object.entries(this.currencyData).map(([currency, values]) => ({
      currency,
      buy: parseFloat(values[0].toFixed(2)),
      sell: parseFloat(values[1].toFixed(2)),
    }));
  }
}

const currencyStore = new CurrencyStore();
export default currencyStore;
