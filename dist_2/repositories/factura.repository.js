"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let FacturaRepository = class FacturaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, ventaRepositoryGetter) {
        super(models_1.Factura, dataSource);
        this.ventaRepositoryGetter = ventaRepositoryGetter;
        this.pertenece_a = this.createBelongsToAccessorFor('pertenece_a', ventaRepositoryGetter);
        this.registerInclusionResolver('pertenece_a', this.pertenece_a.inclusionResolver);
    }
};
FacturaRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mysql')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('VentaRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MysqlDataSource, Function])
], FacturaRepository);
exports.FacturaRepository = FacturaRepository;
//# sourceMappingURL=factura.repository.js.map