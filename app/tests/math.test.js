const { test } = require('node:test');
const assert = require('node:assert');
const { add } = require('../src/math');

test('add sums two positive numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('add handles negative numbers', () => {
  assert.strictEqual(add(-2, -3), -5);
});
