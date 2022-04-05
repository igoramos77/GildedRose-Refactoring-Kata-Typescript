import { Item } from './item';

export class GildedRose {
  items: Item[];

  constructor(items = [] as Item[]) {
      this.items = items;
  }

  updateQuality() {
    // refactor method
  }
}


// Client

const gildedRose = new GildedRose([new Item('Aged Brie', 0, 0)]);
const items = gildedRose.updateQuality();

console.log(items);
console.log(gildedRose.updateQuality())