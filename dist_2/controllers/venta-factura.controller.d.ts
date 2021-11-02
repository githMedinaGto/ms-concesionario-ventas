import { Count, Filter, Where } from '@loopback/repository';
import { Venta, Factura } from '../models';
import { VentaRepository } from '../repositories';
export declare class VentaFacturaController {
    protected ventaRepository: VentaRepository;
    constructor(ventaRepository: VentaRepository);
    get(id: number, filter?: Filter<Factura>): Promise<Factura>;
    create(id: typeof Venta.prototype.id, factura: Omit<Factura, 'id'>): Promise<Factura>;
    patch(id: number, factura: Partial<Factura>, where?: Where<Factura>): Promise<Count>;
    delete(id: number, where?: Where<Factura>): Promise<Count>;
}
