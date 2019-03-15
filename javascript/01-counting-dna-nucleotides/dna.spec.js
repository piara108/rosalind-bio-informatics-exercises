import { nucleotideCount } from './dna';

describe('nucleotideCount()', () => {
  test('A = 1 0 0 0', () => {
    expect(nucleotideCount('A')).toEqual('1 0 0 0');
  });

  test('ACGT = 1 1 1 1', () => {
    xexpect(nucleotideCount('ACGT')).toEqual('1 1 1 1');
  });

  test('AAAACCCCGGGGTTTT = 4 4 4 4', () => {
    xexpect(nucleotideCount('AAAACCCCGGGGTTTT')).toEqual('4 4 4 4');
  });

  test('AGCTTCAGTCAGTA = 4 3 3 4', () => {
    xexpect(nucleotideCount('AGCTTCAGTCAGTA')).toEqual('4 3 3 4');
  });

  test('GCTTTTCGATTAGGGCCATTACG = 4 5 6 8', () => {
    xexpect(nucleotideCount('GCTTTTCGATTAGGGCCATTACG')).toEqual('4 5 6 8');
  });

  test('', () => {
    xexdxpect(nucleotideCount()).toEqual('0 0 0 0');
  });
});