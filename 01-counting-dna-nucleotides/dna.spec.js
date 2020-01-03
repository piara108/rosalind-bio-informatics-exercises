import { nucleotideCount } from './dna';

describe('nucleotideCount()', () => {
  test('A', () => {
    expect(nucleotideCount('A')).toEqual('1 0 0 0');
  });

  xtest('ACGT', () => {
    expect(nucleotideCount('ACGT')).toEqual('1 1 1 1');
  });

  xtest('AAAACCCCGGGGTTTT', () => {
    expect(nucleotideCount('AAAACCCCGGGGTTTT')).toEqual('4 4 4 4');
  });

  xtest('AGCTTCAGTCAGTA', () => {
    expect(nucleotideCount('AGCTTCAGTCAGTA')).toEqual('4 3 3 4');
  });

  xtest('GCTTTTCGATTAGGGCCATTACG', () => {
    expect(nucleotideCount('GCTTTTCGATTAGGGCCATTACG')).toEqual('4 5 6 8');
  });

  xtest('Empty', () => {
    expect(nucleotideCount()).toEqual('0 0 0 0');
  });
});