import { Venta, Vendedor } from '../models';
import { VentaRepository } from '../repositories';
export declare class VentaVendedorController {
    ventaRepository: VentaRepository;
    constructor(ventaRepository: VentaRepository);
    getVendedor(id: typeof Venta.prototype.id): Promise<Vendedor>;
}
