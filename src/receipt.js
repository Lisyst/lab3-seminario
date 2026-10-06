import { formatPrice } from './format.js';
import { round2 } from './money.js';
// Arma el recibo en texto
export function buildReceipt(items) {
  const lines = ['=== MINI TIENDA ==='];
  let total = 0;

  for (const { name, price, quantity } of items) {
    const subtotal = round2(price * quantity);
    total = round2(total + subtotal);
    lines.push(`${`${name} x${quantity}`.padEnd(28)}${formatPrice(subtotal, { width: 12 })}`);
  }

  lines.push(`${'TOTAL'.padEnd(28)}${formatPrice(total, { width: 12 })}`);
  return lines.join('\n');
}