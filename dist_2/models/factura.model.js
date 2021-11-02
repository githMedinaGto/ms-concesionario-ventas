"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factura = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const venta_model_1 = require("./venta.model");
let Factura = class Factura extends repository_1.Entity {
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
], Factura.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Factura.prototype, "consecutivo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Factura.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Factura.prototype, "precio_venta", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => venta_model_1.Venta, { name: 'pertenece_a' }),
    (0, tslib_1.__metadata)("design:type", Number)
], Factura.prototype, "id_venta", void 0);
Factura = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Factura);
exports.Factura = Factura;
//# sourceMappingURL=factura.model.js.map