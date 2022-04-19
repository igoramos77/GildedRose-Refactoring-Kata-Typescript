import { IItemProps, TNames } from "./interfaces/IItemProps";

export class Item implements IItemProps {
    name: TNames;
    sellIn: number;
    quality: number;

    constructor(name: TNames, sellIn: number, quality: number) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
}