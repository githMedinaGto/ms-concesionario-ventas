import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Vendedor, VendedorRelations } from '../models';
export declare class VendedorRepository extends DefaultCrudRepository<Vendedor, typeof Vendedor.prototype.id, VendedorRelations> {
    constructor(dataSource: MysqlDataSource);
}
