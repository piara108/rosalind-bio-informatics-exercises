import { convertDNA() } from './revc';

describe('convertDNA()', () => {
  test('Empty', () => {
    expect(convertDNA()).toEqual('');
  });
});