import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Factura, FacturaRelations, Venta } from '../models';
import { VentaRepository } from './venta.repository';
export declare class FacturaRepository extends DefaultCrudRepository<Factura, typeof Factura.prototype.id, FacturaRelations> {
    protected ventaRepositoryGetter: Getter<VentaRepository>;
    readonly pertenece_a: BelongsToAccessor<Venta, typeof Factura.prototype.id>;
    constructor(dataSource: MysqlDataSource, ventaRepositoryGetter: Getter<VentaRepository>);
}
