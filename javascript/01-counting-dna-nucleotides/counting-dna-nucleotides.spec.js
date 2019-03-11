import { nucleotideCount } from './counting-dna-nucleotides';

describe('nucleotideCount()', () => {
  test('A = 1 0 0 0', () => {
    expect(nucleotideCount('A')).toEqual('1 0 0 0');
  });

  test('ACGT = 1 1 1 1', () => {
    expect(nucleotideCount('ACGT')).toEqual('1 1 1 1');
  });

  test('AAAACCCCGGGGTTTT = 4 4 4 4', () => {
    expect(nucleotideCount('AAAACCCCGGGGTTTT')).toEqual('4 4 4 4');
  });

  test('AGCTTCAGTCAGTA = 4 3 3 4', () => {
    expect(nucleotideCount('AGCTTCAGTCAGTA')).toEqual('4 3 3 4');
  });

  test('GCTTTTCGATTAGGGCCATTACG = 4 5 6 8', () => {
    expect(nucleotideCount('GCTTTTCGATTAGGGCCATTACG')).toEqual('4 5 6 8');
  });

  test('', () => {
    expect(nucleotideCount()).toEqual('0 0 0 0');
  });
});