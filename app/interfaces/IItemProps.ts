export type TNames = 
  | 'Aged Brie'
  | 'Sulfuras'
  | 'Backstage passes'
  | 'Conjured'
;

export interface IItemProps {
  name: TNames;
  sellIn: number;
  quality: number;
}