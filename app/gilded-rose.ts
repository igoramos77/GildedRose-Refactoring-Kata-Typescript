import { Item } from './item';
import { 
  updateQualityForAgedBrie, 
  updateQualityForConjured,
  updateQualityDefaultItem,
  updateQualityForSulfuras,
} from './update-quality';

export class GildedRose {
  items: Item[];

  constructor(items = [] as Item[]) {
      this.items = items;
  }

  updateQuality() {
    
    this.items.forEach((item: Item) => {
      
      switch (item.name) {
        case 'Aged Brie': {
          item = updateQualityForAgedBrie(item);
          break;
        }
        case 'Conjured': {
          item = updateQualityForConjured(item);
          break;
        }
        case 'Sulfuras': {
          item = updateQualityForSulfuras(item);
          break;
        }
        default: {
            item = updateQualityDefaultItem(item);
        }
      }

    });

  }
}


// Client

const item1 = new Item('Aged Brie', 0, 0); 
const item2 = new Item('Backstage passes', 0, 20); 
const item3 = new Item('Conjured', 4, 20); 

const gildedRose = new GildedRose([
  item1, item2, item3
]);

const items = gildedRose.updateQuality();

console.log(items);
console.log(gildedRose.updateQuality());