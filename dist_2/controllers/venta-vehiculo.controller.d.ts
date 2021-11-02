import { Venta, Vehiculo } from '../models';
import { VentaRepository } from '../repositories';
export declare class VentaVehiculoController {
    ventaRepository: VentaRepository;
    constructor(ventaRepository: VentaRepository);
    getVehiculo(id: typeof Venta.prototype.id): Promise<Vehiculo>;
}
