import { translateRNA } from './prot';

describe('Translating RNA into Protein', () => {
  const warning = 'Must contain at least 3 nucleotides.';

  const strand1 = '';
  const strand2 = 'AC';
  const strand3 = 'CCC';
  const strand4 = 'AAAAAGAAA';
  const strand5 = 'AUGGCCAUGGCGCCCAGAACUGAGAUCAAUAGUACCCGUAUUAACGGGUGA';

  test(`${strand1}`, () => {
    expect(() => translateRNA(strand1)).toThrow(new Error(warning));
  });

  test(`${strand2}`, () => {
    expect(() => translateRNA(strand2)).toThrow(new Error(warning));
  });

  test(`${strand3}`, () => {
    expect(translateRNA(strand3)).toEqual('P');
  });

  test(`${strand4}`, () => {
    expect(translateRNA(strand4)).toEqual('KKK');
  });

  test(`${strand5}`, () => {
    expect(translateRNA(strand5)).toEqual('MAMAPRTEINSTRING');
  });
});
