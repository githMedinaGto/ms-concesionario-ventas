import { Entity } from '@loopback/repository';
export declare class Factura extends Entity {
    id?: number;
    consecutivo: number;
    fecha: string;
    precio_venta: number;
    id_venta: number;
    constructor(data?: Partial<Factura>);
}
export interface FacturaRelations {
}
export declare type FacturaWithRelations = Factura & FacturaRelations;
