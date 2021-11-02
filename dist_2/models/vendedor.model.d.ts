import { Entity } from '@loopback/repository';
import { Cliente } from './cliente.model';
export declare class Vendedor extends Entity {
    id?: number;
    nombre: string;
    documento: string;
    celular: string;
    correo: string;
    clientes: Cliente[];
    constructor(data?: Partial<Vendedor>);
}
export interface VendedorRelations {
}
export declare type VendedorWithRelations = Vendedor & VendedorRelations;
