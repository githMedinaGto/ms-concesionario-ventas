"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const factura_model_1 = require("./factura.model");
let Venta = class Venta extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Venta.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Venta.prototype, "placa", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Venta.prototype, "id_cliente", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Venta.prototype, "id_vehiculo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Venta.prototype, "id_vendedor", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => factura_model_1.Factura, { keyTo: 'id_venta' }),
    (0, tslib_1.__metadata)("design:type", factura_model_1.Factura)
], Venta.prototype, "factura", void 0);
Venta = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Venta);
exports.Venta = Venta;
//# sourceMappingURL=venta.model.js.map