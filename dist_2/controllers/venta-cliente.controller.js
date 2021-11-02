"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaClienteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VentaClienteController = class VentaClienteController {
    constructor(ventaRepository) {
        this.ventaRepository = ventaRepository;
    }
    async getCliente(id) {
        return this.ventaRepository.comprador(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/ventas/{id}/cliente', {
        responses: {
            '200': {
                description: 'Cliente belonging to Venta',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Cliente) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VentaClienteController.prototype, "getCliente", null);
VentaClienteController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.VentaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.VentaRepository])
], VentaClienteController);
exports.VentaClienteController = VentaClienteController;
//# sourceMappingURL=venta-cliente.controller.js.map