import { Entity } from '@loopback/repository';
import { Factura } from './factura.model';
export declare class Venta extends Entity {
    id?: number;
    placa: string;
    id_cliente: number;
    id_vehiculo: number;
    id_vendedor: number;
    factura: Factura;
    constructor(data?: Partial<Venta>);
}
export interface VentaRelations {
}
export declare type VentaWithRelations = Venta & VentaRelations;
