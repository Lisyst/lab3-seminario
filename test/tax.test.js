import test from 'node:test';
import assert from 'node:assert/strict';
import { TAX_RATE, calculateTax, addTax } from '../src/tax.js';
import { calculateTotal } from '../src/pricing.js';

test('TAX_RATE es 0.13', () => {
  assert.equal(TAX_RATE, 0.13);
});

test('calculateTax calcula el 13% redondeado a 2 decimales', () => {
  assert.equal(calculateTax(100), 13);
  assert.equal(calculateTax(0), 0);
  assert.equal(calculateTax(10.55), 1.37);
});

test('addTax agrega el 13% al monto', () => {
  assert.equal(addTax(100), 113);
  assert.equal(addTax(0), 0);
  assert.equal(addTax(50), 56.5);
});

test('calculateTotal con includeTax = true suma el IVA', () => {
  const items = [{ price: 100, quantity: 1 }];
  assert.equal(calculateTotal(items, { includeTax: true }), 113);
  assert.equal(calculateTotal(items, { includeTax: false }), 100);
  assert.equal(calculateTotal(items), 100);
});

test('calculateTotal aplica primero descuento y luego IVA', () => {
  const items = [{ price: 100, quantity: 1 }];
  assert.equal(calculateTotal(items, { discountCode: 'SAVE10', includeTax: true }), 101.7);
});
