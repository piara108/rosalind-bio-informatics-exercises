import { nucleotideCount } from './counting-dna-nucleotides';

describe('nucleotideCount()', () => {
  test('A = 1 0 0 0', () => {
    expect(nucleotideCount('A')).toEqual('1 0 0 0');
  });

  test('ACGT = 1 1 1 1', () => {
    expect(nucleotideCount('ACGT')).toEqual('1 1 1 1');
  });
});