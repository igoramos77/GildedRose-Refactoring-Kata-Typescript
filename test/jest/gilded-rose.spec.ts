import { GildedRose } from '../../app/gilded-rose';
import { Item } from '../../app/item';

describe('Gilded Rose', () => {
  it('Is it', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 0)]);
    expect(gildedRose.items[0].name).toBe('Aged Brie');
  });
});
