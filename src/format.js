import { convert, getCurrency } from './currency.js';

/**
 * Da formato a un precio para mostrarlo al usuario.
 *
 * Reglas actuales:
 *  - Por defecto se muestra en bolivianos (Bs).
 *  - Se puede indicar otra moneda soportada (BOB, USD o EUR).
 *  - El monto de entrada siempre está en bolivianos y se convierte a la moneda indicada.
 *  - Siempre con dos decimales.
 *  - Una moneda desconocida lanza un error.
 *
 * @param {number} amount Monto a formatear, expresado en bolivianos.
 * @param {string} [currency='BOB'] Código de moneda: BOB, USD o EUR.
 * @returns {string} Precio formateado.
 * @throws {Error} Si la moneda no está soportada.
 *
 * @example
 * formatPrice(10)           // 'Bs 10.00'
 * formatPrice(25.5)         // 'Bs 25.50'
 * formatPrice(0)            // 'Bs 0.00'
 * formatPrice(100, 'USD')   // '$ 14.50'
 * formatPrice(100, 'EUR')   // '€ 13.30'
 */
export function formatPrice(amount, currency = 'BOB', { width = 0 } = {}) {
  const { symbol } = getCurrency(currency);
  return `${symbol} ${convert(amount, currency).toFixed(2)}`.padStart(width);
}