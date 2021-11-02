import { DefaultCrudRepository } from '@loopback/repository';
import { MysqlDataSource } from '../datasources';
import { Cliente, ClienteRelations } from '../models';
export declare class ClienteRepository extends DefaultCrudRepository<Cliente, typeof Cliente.prototype.id, ClienteRelations> {
    constructor(dataSource: MysqlDataSource);
}
