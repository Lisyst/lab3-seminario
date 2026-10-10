import test from 'node:test';
import assert from 'node:assert/strict';
import { applyDiscount } from '../src/discounts.js';
import { calculateTotal } from '../src/index.js';

test('aplica los tres códigos de descuento', () => {
    assert.equal(applyDiscount(100, 'SAVE10'), 90);
    assert.equal(applyDiscount(100, 'SAVE20'), 80);
    assert.equal(applyDiscount(100, 'BLACKFRIDAY'), 70);
    });

test('acepta códigos en minúsculas', () => {
    assert.equal(applyDiscount(100, 'save10'), 90);
    });

test('un código desconocido conserva el monto', () => {
    assert.equal(applyDiscount(100, 'OTRO'), 100);
    });

test('sin código conserva el monto', () => {
    assert.equal(applyDiscount(100), 100);
    });

test('redondea el descuento a dos decimales', () => {
    assert.equal(applyDiscount(25.55, 'SAVE10'), 23);
    });

test('calculateTotal aplica descuentos al carrito', () => {
    const items = [
        { price: 25.5, quantity: 2 },
        { price: 40, quantity: 1 },
    ];

    assert.equal(calculateTotal(items, { discountCode: 'SAVE10' }), 81.9);
    assert.equal(calculateTotal(items, { discountCode: 'SAVE20' }), 72.8);
    assert.equal(calculateTotal(items, { discountCode: 'BLACKFRIDAY' }), 63.7);
});

test('calculateTotal conserva el total sin descuento válido', () => {
    const items = [{ price: 100, quantity: 1 }];

    assert.equal(calculateTotal(items), 100);
    assert.equal(calculateTotal(items, { discountCode: 'OTRO' }), 100);
});