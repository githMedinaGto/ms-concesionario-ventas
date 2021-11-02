"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaFacturaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VentaFacturaController = class VentaFacturaController {
    constructor(ventaRepository) {
        this.ventaRepository = ventaRepository;
    }
    async get(id, filter) {
        return this.ventaRepository.factura(id).get(filter);
    }
    async create(id, factura) {
        return this.ventaRepository.factura(id).create(factura);
    }
    async patch(id, factura, where) {
        return this.ventaRepository.factura(id).patch(factura, where);
    }
    async delete(id, where) {
        return this.ventaRepository.factura(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/ventas/{id}/factura', {
        responses: {
            '200': {
                description: 'Venta has one Factura',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Factura),
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('filter')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VentaFacturaController.prototype, "get", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/ventas/{id}/factura', {
        responses: {
            '200': {
                description: 'Venta model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Factura) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Factura, {
                    title: 'NewFacturaInVenta',
                    exclude: ['id'],
                    optional: ['id_venta']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VentaFacturaController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/ventas/{id}/factura', {
        responses: {
            '200': {
                description: 'Venta.Factura PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Factura, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Factura))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VentaFacturaController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/ventas/{id}/factura', {
        responses: {
            '200': {
                description: 'Venta.Factura DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Factura))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VentaFacturaController.prototype, "delete", null);
VentaFacturaController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.VentaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.VentaRepository])
], VentaFacturaController);
exports.VentaFacturaController = VentaFacturaController;
//# sourceMappingURL=venta-factura.controller.js.map