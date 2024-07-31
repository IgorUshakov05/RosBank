import { makeAutoObservable } from "mobx";

interface Talon {
  type: string;
  number: number;
}

class TalonStore {
  Talons: Talon[] = [
    { type: "A", number: 0 },
    { type: "B", number: 0 },
    { type: "C", number: 0 },
  ];
  Talon: string = "";
  generatedCode: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setCurrencyData(data: string) {
    this.Talon = data;

    // Находим талон нужного типа и увеличиваем его номер
    const talonIndex = this.Talons.findIndex((item) => item.type === data);
    if (talonIndex !== -1) {
      this.Talons[talonIndex].number += 1;
    } else {
      // Если тип не найден, добавляем новый тип в массив
      this.Talons.push({ type: data, number: 1 });
    }

    this.generateCode(data);
  }

  generateCode(data: string) {
    const talon = this.Talons.find((item) => item.type === data);
    if (talon) {
      this.generatedCode = `${talon.type}${String(talon.number).padStart(
        3,
        "0"
      )}`;
    } else {
      this.generatedCode = "000"; // если что-то пошло не так, возвращаем дефолтное значение
    }
  }

  get getTalon() {
    return this.generatedCode;
  }
}

const talonStore = new TalonStore();
export default talonStore;
