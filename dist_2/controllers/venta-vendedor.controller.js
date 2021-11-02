"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaVendedorController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VentaVendedorController = class VentaVendedorController {
    constructor(ventaRepository) {
        this.ventaRepository = ventaRepository;
    }
    async getVendedor(id) {
        return this.ventaRepository.vendido_por(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/ventas/{id}/vendedor', {
        responses: {
            '200': {
                description: 'Vendedor belonging to Venta',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Vendedor) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VentaVendedorController.prototype, "getVendedor", null);
VentaVendedorController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.VentaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.VentaRepository])
], VentaVendedorController);
exports.VentaVendedorController = VentaVendedorController;
//# sourceMappingURL=venta-vendedor.controller.js.map