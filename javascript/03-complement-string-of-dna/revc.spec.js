import { convertDNA } from './revc';

describe('convertDNA()', () => {
  test('Empty', () => {
    expect(convertDNA('')).toEqual('');
  });

  xtest('AG', () => {
    expect(convertDNA('AG')).toEqual('CT');
  });

  xtest('AAAACCCGGT', () => {
    expect(convertDNA('AAAACCCGGT')).toEqual('ACCGGGTTTT');
  });

  xtest('AAACCCGGGTTT', () => {
    expect(convertDNA('AAACCCGGGTTT')).toEqual('AAACCCGGGTTT');
  });

  xtest('ATGCCGTAATCGTAGCTAGGCC', () => {
    expect(convertDNA('ATGCCGTAATCGTAGCTAGGCC')).toEqual('GGCCTAGCTACGATTACGGCAT');
  });
});