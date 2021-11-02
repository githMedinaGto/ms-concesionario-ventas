import { Venta, Cliente } from '../models';
import { VentaRepository } from '../repositories';
export declare class VentaClienteController {
    ventaRepository: VentaRepository;
    constructor(ventaRepository: VentaRepository);
    getCliente(id: typeof Venta.prototype.id): Promise<Cliente>;
}
