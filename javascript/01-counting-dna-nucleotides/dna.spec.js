import { nucleotideCount } from './dna';

describe('nucleotideCount()', () => {
  test('A', () => {
    expect(nucleotideCount('A')).toEqual('1 0 0 0');
  });

  test('ACGT', () => {
    xexpect(nucleotideCount('ACGT')).toEqual('1 1 1 1');
  });

  test('AAAACCCCGGGGTTTT', () => {
    xexpect(nucleotideCount('AAAACCCCGGGGTTTT')).toEqual('4 4 4 4');
  });

  test('AGCTTCAGTCAGTA', () => {
    xexpect(nucleotideCount('AGCTTCAGTCAGTA')).toEqual('4 3 3 4');
  });

  test('GCTTTTCGATTAGGGCCATTACG', () => {
    xexpect(nucleotideCount('GCTTTTCGATTAGGGCCATTACG')).toEqual('4 5 6 8');
  });

  test('', () => {
    xexdxpect(nucleotideCount()).toEqual('0 0 0 0');
  });
});