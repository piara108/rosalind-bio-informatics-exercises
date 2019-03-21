import { contentOfGC } from './gc';

describe('contentGC()', () => {
  test('ATGC', () => {
    expect(contentOfGC('ATCG')).toEqual(.5);
  });
});