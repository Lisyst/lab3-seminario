import { convert, getCurrency } from './currency.js';

/**
 * Da formato a un precio para mostrarlo al usuario.
 *
 * Reglas actuales:
 * - Por defecto se muestra en bolivianos (Bs).
 * - Se puede indicar otra moneda soportada (BOB, USD o EUR).
 * - El monto de entrada siempre está en bolivianos y se convierte a la moneda indicada.
 * - Siempre con dos decimales.
 * - Una moneda desconocida lanza un error.
 * - Con `width`, el resultado se rellena a la izquierda hasta ese ancho.
 *
 * @param {number} amount Monto a formatear, expresado en bolivianos.
 * @param {string} [currency='BOB'] Código de moneda: BOB, USD o EUR.
 * @param {{ width?: number }} [options] Opciones de formato.
 * @param {number} [options.width=0] Ancho mínimo; rellena con espacios a la izquierda.
 * @returns {string} Precio formateado.
 * @throws {Error} Si la moneda no está soportada.
 *
 * @example
 * formatPrice(10) // 'Bs 10.00'
 * formatPrice(100, 'USD') // '$ 14.50'
 * formatPrice(10, 'BOB', { width: 12 }) // '    Bs 10.00'
 */
export function formatPrice(amount, currency = 'BOB', { width = 0 } = {}) {
  const { symbol } = getCurrency(currency);
  return `${symbol} ${convert(amount, currency).toFixed(2)}`.padStart(width);
}