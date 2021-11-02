"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaVehiculoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VentaVehiculoController = class VentaVehiculoController {
    constructor(ventaRepository) {
        this.ventaRepository = ventaRepository;
    }
    async getVehiculo(id) {
        return this.ventaRepository.vehiculo_en_venta(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/ventas/{id}/vehiculo', {
        responses: {
            '200': {
                description: 'Vehiculo belonging to Venta',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Vehiculo) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.number('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], VentaVehiculoController.prototype, "getVehiculo", null);
VentaVehiculoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.VentaRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.VentaRepository])
], VentaVehiculoController);
exports.VentaVehiculoController = VentaVehiculoController;
//# sourceMappingURL=venta-vehiculo.controller.js.map