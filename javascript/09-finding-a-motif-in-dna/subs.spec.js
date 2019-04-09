import { substringFinder } from './subs'

describe('Finding a motif in a DNA substring', () => {
  const strandT1 = '';
  const strandS1 = '';

  const strandT2 = 'GATATATGCATATACTTACT';
  const strandS2 = 'GATATATGCATATACTT';

  const strandT3 = 'ATAT';
  const strandS3 = 'GATATATGCATATACTT';

  const strandT4 = 'AAAAAAAAAAA';
  const strandS4 = 'TTTTTTTTTTTTTTTTTTTT';

  test(`${strandT1} in ${strandS1}`, () => {
    expect(
      () => substringFinder(strandT1, strandS1)
    ).toThrow(new Error('Substrand or Strand length must be greater than 0 bp'));
  });

  test(`${strandT2} in ${strandS2}`, () => {
    expect(
      () => substringFinder(strandT2, strandS2)
    ).toThrow(new Error('Substrand(t) must be shorter than Strand(s)'));
  });

  test(`${strandT3} in ${strandS3}`, () => {
    expect(
      substringFinder(strandT3, strandS3)
    ).toEqual([2, 4, 10]);
  });

  test(`${strandT4} in ${strandS4}`, () => {
    expect(
      substringFinder(strandT4, strandS4)
    ).toEqual('No motives found');
  });
});