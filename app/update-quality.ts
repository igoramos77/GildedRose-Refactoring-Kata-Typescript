import { Item } from './item'

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

const isMax = (quality: number) => quality < MAX_QUALITY;
const isMin = (quality: number) => quality > MIN_QUALITY;

const addQuality = (quality: number) => isMax(quality) ? quality + 1 : quality;
const removeQuality = (quality: number) => isMin(quality) ? quality - 1 :  quality; 

export const updateQualityForAgedBrie = (item: Item) :Item =>  {
    // Implement method

    return item;
}

const increaseQualityForConcert = (item: Item): number => {
    // Implement method

    return 0; //quality
}

export const updateQualityForConcert = (item: Item) :Item => {
    // Implement method

    return item;
}

export const updateQualityForSulfuras = (item: Item) :Item => {
    // Implement method

    return item;
}

export const updateQualityForConjured = (item: Item) :Item => {
    // Implement method

    return item;
}

const updateQualityItem = (item: Item): Item => {
    // Implement method
    
    return item;
}

export const updateQualityForNormalItem = (item: Item) :Item => { 
    // Implement method

    return item;
}