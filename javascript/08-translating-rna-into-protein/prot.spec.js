import { translateRNA } from './prot';

describe('Translating RNA into Protein', () => {
  const strand1 = 'GCGAACGCACUC';
  const strand2 = 'AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA';

  test(`${strand1}`, () => {
    expect(translateRNA(strand1)).toEqual('ANAL');
  });

  test(`${strand2}`, () => {
    expect(translateRNA(strand2)).toEqual('MAMAPRTEINSTRING');
  });
});