"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaVentaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FacturaVentaController = class FacturaVentaController {
    constructor(facturaRepository) {
        this.facturaRepository = facturaRepository;
    }
    async getVenta(id) {
        return this.facturaRepository.pertenece_a(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/facturas/{id}/venta', {
        responses: {
            '200': {
                description: 'Venta belonging to Factura',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Venta) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FacturaVentaController.prototype, "getVenta", null);
FacturaVentaController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.FacturaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.FacturaRepository])
], FacturaVentaController);
exports.FacturaVentaController = FacturaVentaController;
//# sourceMappingURL=factura-venta.controller.js.map