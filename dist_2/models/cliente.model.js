"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const vendedor_model_1 = require("./vendedor.model");
let Cliente = class Cliente extends repository_1.Entity {
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
], Cliente.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Cliente.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Cliente.prototype, "documento", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Cliente.prototype, "correo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Cliente.prototype, "celular", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => vendedor_model_1.Vendedor, { name: 'creado_por' }),
    (0, tslib_1.__metadata)("design:type", Number)
], Cliente.prototype, "id_vendedor", void 0);
Cliente = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            foreignKeys: {
                fk_cliente_id_vendedor: {
                    name: 'fk_cliente_id_vendedor',
                    entity: 'Vendedor',
                    entityKey: 'id',
                    foreignKey: 'id_vendedor',
                }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Cliente);
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.model.js.map