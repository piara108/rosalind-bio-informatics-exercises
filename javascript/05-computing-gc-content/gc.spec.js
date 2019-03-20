import { computeGC } from './gc';

describe('computeGC()', () => {
  test('ATGC', () => {
    expect(computeGC('ATCG')).toEqual(.5);
  });
});