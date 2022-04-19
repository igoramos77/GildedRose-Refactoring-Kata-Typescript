import { GildedRose } from '../app/gilded-rose';

import { Item } from '../app/item';

const items = [
  new Item("Conjured", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Backstage passes", 5, 7),
  new Item("Sulfuras", 0, 80), 
];

const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
    days = + process.argv[2]; // pega por parametro
  }

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");

  console.log("name, sellIn, quality");
  
  items.forEach(element => {
    console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
  });

  console.log();

  gildedRose.updateQuality();
}
