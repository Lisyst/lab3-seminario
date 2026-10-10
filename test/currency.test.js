import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CURRENCIES, getCurrency, convert } from '../src/currency.js';
import { formatPrice } from '../src/format.js';

test('getCurrency devuelve la moneda existente', () => {
  assert.equal(getCurrency('USD').symbol, '$');
});

test('getCurrency lanza error si la moneda no existe', () => {
  assert.throws(() => getCurrency('XXX'), /Moneda no soportada: XXX/);
});

test('getCurrency rechaza propiedades heredadas como toString', () => {
  assert.throws(() => getCurrency('toString'), /Moneda no soportada: toString/);
});

test('convert usa BOB por defecto', () => {
  assert.equal(convert(100), 100);
});

test('convert pasa de BOB a USD y EUR', () => {
  assert.equal(convert(100, 'USD'), 14.5);
  assert.equal(convert(100, 'EUR'), 13.3);
});

test('CURRENCIES incluye BOB, USD y EUR', () => {
  assert.deepEqual(Object.keys(CURRENCIES), ['BOB', 'USD', 'EUR']);
});

test('formatPrice(100, "USD") devuelve "$ 14.50"', () => {
  assert.equal(formatPrice(100, 'USD'), '$ 14.50');
});

test('formatPrice(10) sigue devolviendo "Bs 10.00"', () => {
  assert.equal(formatPrice(10), 'Bs 10.00');
});

test('formatPrice lanza error con moneda desconocida', () => {
  assert.throws(() => formatPrice(10, 'XXX'));
});