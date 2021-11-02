import { Entity } from '@loopback/repository';
export declare class Vehiculo extends Entity {
    id?: number;
    color: string;
    modelo: number;
    serie_chasis: string;
    serie_motor: string;
    precio: number;
    descuento?: number;
    estado?: boolean;
    id_marca: number;
    categorias?: [];
    fotos?: [];
    id_proveedor?: number;
    constructor(data?: Partial<Vehiculo>);
}
export interface VehiculoRelations {
}
export declare type VehiculoWithRelations = Vehiculo & VehiculoRelations;
