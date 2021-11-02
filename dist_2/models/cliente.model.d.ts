import { Entity } from '@loopback/repository';
export declare class Cliente extends Entity {
    id?: number;
    nombre: string;
    documento: string;
    correo: string;
    celular: string;
    id_vendedor: number;
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export declare type ClienteWithRelations = Cliente & ClienteRelations;
