import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Vehiculo, VehiculoRelations } from '../models';
export declare class VehiculoRepository extends DefaultCrudRepository<Vehiculo, typeof Vehiculo.prototype.id, VehiculoRelations> {
    constructor(dataSource: MysqlDataSource);
}
