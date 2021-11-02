"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Vehiculo = class Vehiculo extends repository_1.Entity {
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
], Vehiculo.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vehiculo.prototype, "color", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Vehiculo.prototype, "modelo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vehiculo.prototype, "serie_chasis", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Vehiculo.prototype, "serie_motor", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Vehiculo.prototype, "precio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 0
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Vehiculo.prototype, "descuento", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: true,
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Vehiculo.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Vehiculo.prototype, "id_marca", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({}),
    (0, tslib_1.__metadata)("design:type", Array)
], Vehiculo.prototype, "categorias", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({}),
    (0, tslib_1.__metadata)("design:type", Array)
], Vehiculo.prototype, "fotos", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({}),
    (0, tslib_1.__metadata)("design:type", Number)
], Vehiculo.prototype, "id_proveedor", void 0);
Vehiculo = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            foreignKeys: {
                fk_vehiculo_id_proveedor: {
                    name: 'fk_vehiculo_id_proveedor',
                    entity: 'Proveedor',
                    entityKey: 'id',
                    foreignKey: 'id_proveedor',
                },
                fk_vehiculo_id_marca: {
                    name: 'fk_vehiculo_id_marca',
                    entity: 'Marca',
                    entityKey: 'id',
                    foreignKey: 'id_marca',
                }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Vehiculo);
exports.Vehiculo = Vehiculo;
//# sourceMappingURL=vehiculo.model.js.map