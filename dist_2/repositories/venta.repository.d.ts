import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Factura, Venta, VentaRelations } from '../models';
import { FacturaRepository } from './factura.repository';
export declare class VentaRepository extends DefaultCrudRepository<Venta, typeof Venta.prototype.id, VentaRelations> {
    protected facturaRepositoryGetter: Getter<FacturaRepository>;
    readonly factura: HasOneRepositoryFactory<Factura, typeof Venta.prototype.id>;
    constructor(dataSource: MysqlDataSource, facturaRepositoryGetter: Getter<FacturaRepository>);
}
