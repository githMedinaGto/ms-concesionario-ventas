"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let VentaRepository = class VentaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, facturaRepositoryGetter) {
        super(models_1.Venta, dataSource);
        this.facturaRepositoryGetter = facturaRepositoryGetter;
        this.factura = this.createHasOneRepositoryFactoryFor('factura', facturaRepositoryGetter);
        this.registerInclusionResolver('factura', this.factura.inclusionResolver);
    }
};
VentaRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mysql')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('FacturaRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MysqlDataSource, Function])
], VentaRepository);
exports.VentaRepository = VentaRepository;
//# sourceMappingURL=venta.repository.js.map