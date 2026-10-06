import { round2 } from './money.js';

export const DISCOUNT_CODES = {
    SAVE10: 0.1,
    SAVE20: 0.2,
    BLACKFRIDAY: 0.3,
    };

// Aplica el descuento sin distinguir mayúsculas y minúsculas.
export function applyDiscount(amount, code) {
    const normalizedCode = code?.toUpperCase();

    if (!Object.hasOwn(DISCOUNT_CODES, normalizedCode)) {
        return amount;
    }

    const discount = DISCOUNT_CODES[normalizedCode];
    return round2(amount * (1 - discount));
}