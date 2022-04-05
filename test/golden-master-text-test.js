"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gilded_rose_1 = require("../app/gilded-rose");
var items = [
    new gilded_rose_1.Item("+5 Dexterity Vest", 10, 20),
    new gilded_rose_1.Item("Aged Brie", 2, 0),
    new gilded_rose_1.Item("Elixir of the Mongoose", 5, 7),
    new gilded_rose_1.Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new gilded_rose_1.Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new gilded_rose_1.Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new gilded_rose_1.Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new gilded_rose_1.Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    // this conjured item does not work properly yet
    new gilded_rose_1.Item("Conjured Mana Cake", 3, 6)
];
var gildedRose = new gilded_rose_1.GildedRose(items);
var days = 2;
if (process.argv.length > 2) {
    days = +process.argv[2];
}
for (var i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(function (element) {
        console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
    });
    console.log();
    gildedRose.updateQuality();
}
