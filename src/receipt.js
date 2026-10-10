import { formatPrice } from './format.js';
import { round2 } from './money.js';
import { calculateTotal } from './pricing.js';

/**
 * Arma el recibo en texto.
 *
 * @param {Array<{ name: string, price: number, quantity: number }>} items Ítems del carrito.
 * @param {object} [options] Opciones del recibo.
 * @param {string} [options.discountCode] Código de descuento (se aplica primero).
 * @param {boolean} [options.includeTax=false] Si es true, suma el IVA después del descuento.
 * @param {string} [options.currency='BOB'] Moneda en la que se muestran los montos.
 * @returns {string} Recibo de varias líneas.
 */
export function buildReceipt(items, { discountCode, includeTax = false, currency = 'BOB' } = {}) {
  const lines = ['=== MINI TIENDA ==='];

  for (const { name, price, quantity } of items) {
    const subtotal = round2(price * quantity);
    lines.push(`${`${name} x${quantity}`.padEnd(28)}${formatPrice(subtotal, currency, { width: 12 })}`);
  }

  const total = calculateTotal(items, { discountCode, includeTax });
  lines.push(`${'TOTAL'.padEnd(28)}${formatPrice(total, currency, { width: 12 })}`);
  return lines.join('\n');
}