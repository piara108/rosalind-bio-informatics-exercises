import { toRNA } from './rna';

describe('toRNA()', () => {
  test('Empty', () => {
    expect(toRNA('')).toEqual('');
  });

  test('T', () => {
    expect(toRNA('T')).toEqual('U')
  });

  test('ACGT', () => {
    expect(toRNA('ACGT')).toEqual('ACGU');
  });

  test('GATGGAACTTGACTAAA', () => {
    expect(toRNA('GATGGAACTTGACTAAA')).toEqual('GAUGGAACUUGACUAAA');
  });

  test('TCGATGCGCTACGATCC', () => {
    expect(toRNA('TCGATGCGCTACGATCC')).toEqual('UCGAUGCGCUACGAUCC');
  });
});