import { round2 } from './money.js';

// Monedas soportadas y sus tasas de cambio respecto al boliviano
export const CURRENCIES = {
  BOB: { symbol: 'Bs', rate: 1 },
  USD: { symbol: '$', rate: 0.145 },
  EUR: { symbol: '€', rate: 0.133 },
};

/**
 * Devuelve los datos de una moneda.
 * @param {string} code Código de moneda: BOB, USD o EUR.
 * @returns {{ symbol: string, rate: number }}
 * @throws {Error} Si la moneda no existe.
 */
export function getCurrency(code) {
  if (!Object.hasOwn(CURRENCIES, code)) {
    throw new Error(`Moneda no soportada: ${code}`);
  }
  return CURRENCIES[code];
}

/**
 * Convierte un monto en bolivianos a la moneda indicada.
 * @param {number} amount Monto en bolivianos.
 * @param {string} [code='BOB'] Moneda de destino.
 * @returns {number}
 */
export function convert(amount, code = 'BOB') {
  return round2(amount * getCurrency(code).rate);
}
