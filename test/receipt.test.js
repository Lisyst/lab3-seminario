import test from 'node:test';
import assert from 'node:assert/strict';
import { buildReceipt } from '../src/receipt.js';
// Arma el recibo en texto
test('buildReceipt arma encabezado, líneas y total', () => {
  const receipt = buildReceipt([{ name: 'Mouse Inalámbrico', price: 25.5, quantity: 2 }]);
  const lines = receipt.split('\n');

  assert.equal(lines[0], '=== MINI TIENDA ===');
  assert.equal(lines[1], 'Mouse Inalámbrico x2'.padEnd(28) + '    Bs 51.00');
  assert.equal(lines[2], 'TOTAL'.padEnd(28) + '    Bs 51.00');
});

test('buildReceipt suma varios items', () => {
  const receipt = buildReceipt([
    { name: 'A', price: 10, quantity: 1 },
    { name: 'B', price: 5.5, quantity: 2 },
  ]);
  assert.ok(receipt.endsWith('TOTAL'.padEnd(28) + '    Bs 21.00'));
});

test('buildReceipt combina descuento, IVA y dólares', () => {
  const receipt = buildReceipt(
    [{ name: 'Producto', price: 100, quantity: 1 }],
    { discountCode: 'SAVE10', includeTax: true, currency: 'USD' },
  );
  const totalLine = receipt.split('\n').at(-1);
  assert.equal(totalLine, `${'TOTAL'.padEnd(28)}${'$ 14.75'.padStart(12)}`);
});