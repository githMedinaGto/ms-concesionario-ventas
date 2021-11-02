import { Factura, Venta } from '../models';
import { FacturaRepository } from '../repositories';
export declare class FacturaVentaController {
    facturaRepository: FacturaRepository;
    constructor(facturaRepository: FacturaRepository);
    getVenta(id: typeof Factura.prototype.id): Promise<Venta>;
}
