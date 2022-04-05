import { Item } from './item'

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

const isMax = (quality: number) => quality < MAX_QUALITY;
const isMin = (quality: number) => quality > MIN_QUALITY;

const addQuality = (quality: number) => isMax(quality) ? quality + 1 : quality;
const removeQuality = (quality: number) => isMin(quality) ? quality - 1 :  quality; 

export const updateQualityForAgedBrie = (item: Item) :Item =>  {
  item.quality = addQuality(item.quality)
  item.quality = item.sellIn < 0 ? addQuality(item.quality) : item.quality;
  item.sellIn -= 1;

  return item;
}

const addQualityForConcert = (item: Item): number => {
  let quality = addQuality(item.quality);
  quality = item.sellIn < 11 ? addQuality(quality) : quality;
  quality = item.sellIn < 6 ? addQuality(quality) : quality;

  return quality;
}

export const updateQualityForConcert = (item: Item) :Item => {
  item.quality = item.sellIn === 0 ? 0 : addQualityForConcert(item);    
  item.sellIn -= 1;

  return item;
}

export const updateQualityForSulfuras = (item: Item) :Item => {
  item.quality = 80;

  return item;
}

export const updateQualityForConjured = (item: Item) :Item => {
  if (item.sellIn === 5) {
    item.quality -= 3;
  } else {
    item = updateQualityItem(item)
    item = updateQualityItem(item);
  }

  item.sellIn -= 1;

  return item;
}

const updateQualityItem = (item: Item): Item => {
  item.quality = removeQuality(item.quality);
  item.quality = item.sellIn <= 0 ? removeQuality(item.quality) : item.quality;
  
  return item;
}

export const updateQualityDefaultItem = (item: Item) :Item => { 
  item = updateQualityItem(item);
  item.sellIn -= 1;

  return item;
}