import { describe, expect, test } from '@jest/globals';

describe('This is just a mocking test suite', () => {
  test('This is just a mocking test', () => {
    const a = 1;

    expect(a).toBe(1);
  });
});
