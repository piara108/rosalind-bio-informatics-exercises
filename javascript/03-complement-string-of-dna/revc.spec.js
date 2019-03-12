import { convertDNA } from './revc';

describe('convertDNA()', () => {
  test('Empty', () => {
    expect(convertDNA('')).toEqual('');
  });

  test('AG', () => {
    expect(convertDNA('AG')).toEqual('CT');
  });

  test('AAAACCCGGT', () => {
    expect(convertDNA('AAAACCCGGT')).toEqual('ACCGGGTTTT');
  });

  test('AAACCCGGGTTT', () => {
    expect(convertDNA('AAACCCGGGTTT')).toEqual('AAACCCGGGTTT');
  });

  test('ATGCCGTAATCGTAGCTAGGCC', () => {
    expect(convertDNA('ATGCCGTAATCGTAGCTAGGCC')).toEqual('GGCCTAGCTACGATTACGGCAT');
  });
});