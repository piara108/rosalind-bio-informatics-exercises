import { distanceHamming } from './hamm'

describe('Hamming', () => {

  const strandDNA01 = 'A';
  const strandDNA02 = 'A';

  const strandDNA03 = 'G';
  const strandDNA04 = 'T';

  const strandDNA05 = 'GAGCCTACTAACGGGAT';
  const strandDNA06 = 'CATCGTAATGACGGCCT';

  const strandDNA07 = 'ATCCTAGCTAGTCTATTACGGGCATTGACAT';
  const strandDNA08 = 'ATACTAGGTAATGTAGTGACGGGCATTGAGA';

  const strandDNA09 = 'GAGGGCATGTTGGGCACTATTTTCCCCATGTCAGGTAAGTCCGTGCGAAA';
  const strandDNA10 = 'AGCCCACCCGTCCCGGGTTTCTAGAGCGGCAGGGCTGTTTATGGAATGCT';

  const strandDNA11 = 'ATGC';
  const strandDNA12 = 'ATC';

  const strandDNA13 = '';
  const strandDNA14 = '';


  test(`${strandDNA01} & ${strandDNA02}`, () => {
    expect(distanceHamming(strandDNA01, strandDNA02)).toEqual(0);
  });

  test(`${strandDNA03} & ${strandDNA04}`, () => {
    expect(distanceHamming(strandDNA03, strandDNA04)).toEqual(1);
  });

  test(`${strandDNA05} & ${strandDNA06}`, () => {
    expect(distanceHamming(strandDNA05, strandDNA06)).toEqual(7);
  });

  test(`${strandDNA07} & ${strandDNA08}`, () => {
    expect(distanceHamming(strandDNA07, strandDNA08)).toEqual(16);
  });

  test(`${strandDNA09} & ${strandDNA10}`, () => {
    expect(distanceHamming(strandDNA09, strandDNA10)).toEqual(41);
  });

  test(`${strandDNA11} & ${strandDNA12}`, () => {
    expect(() => distanceHamming(strandDNA11, strandDNA12)).toThrow(new Error('Strands must be equal in length'));
  });

  test(`${strandDNA13} & ${strandDNA14}`, () => {
    expect(() => distanceHamming(strandDNA13, strandDNA14)).toThrow(new Error('Strands must be greater than 0 in length'));
  });
});