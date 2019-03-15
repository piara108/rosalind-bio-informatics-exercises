import { toRNA } from './rna';

describe('toRNA()', () => {
  test('Empty', () => {
    expect(toRNA('')).toEqual('');
  });

  xtest('T', () => {
    expect(toRNA('T')).toEqual('U')
  });

  xtest('ACGT', () => {
    expect(toRNA('ACGT')).toEqual('ACGU');
  });

  xtest('GATGGAACTTGACTAAA', () => {
    expect(toRNA('GATGGAACTTGACTAAA')).toEqual('GAUGGAACUUGACUAAA');
  });

  xtest('TCGATGCGCTACGATCC', () => {
    expect(toRNA('TCGATGCGCTACGATCC')).toEqual('UCGAUGCGCUACGAUCC');
  });
});