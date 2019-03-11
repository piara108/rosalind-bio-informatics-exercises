import { nucleotideCount } from './counting-dna-nucleotides';

describe('nucleotideCount()', () => {
  test('A', () => {
    expect(nucleotideCount('A')).toEqual('1 0 0 0');
  });
});