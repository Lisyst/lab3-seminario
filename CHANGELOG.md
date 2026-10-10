# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el proyecto usa [Versionado Semántico](https://semver.org/lang/es/).

## [Unreleased]

### Added

### Changed

### Fixed

## [1.1.1] - 2026-10-09

### Fixed
- La búsqueda de productos ya no distingue mayúsculas de minúsculas.

## [1.1.0] - 2026-10-09

### Added
- Códigos de descuento SAVE10, SAVE20 y BLACKFRIDAY aplicables al total del carrito.
- Cálculo y adición de impuesto IVA del 13% (`TAX_RATE`, `calculateTax`, `addTax`, opción `includeTax`).
- Soporte de monedas BOB, USD y EUR (`convert`, `getCurrency`) y `formatPrice(amount, currency)`.
- Recibo imprimible (`buildReceipt`) y comando `receipt` en la CLI.

## [1.0.0] - 2026-10-01

### Added
- Catálogo de productos (`products`, `findProductBySku`, `searchProducts`).
- Cálculo del total de un carrito (`calculateTotal`).
- Formato de precios en bolivianos (`formatPrice`).
- CLI básica con los comandos `list` y `search`.
