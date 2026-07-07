import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    create(createClienteDto: CreateClienteDto): import("@prisma/client").Prisma.Prisma__ClienteClient<{
        nome: string;
        email: string | null;
        id: string;
        createdAt: Date;
        telefone: string | null;
        empresa: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        nome: string;
        email: string | null;
        id: string;
        createdAt: Date;
        telefone: string | null;
        empresa: string | null;
    }[]>;
    findOne(id: string): Promise<{
        nome: string;
        email: string | null;
        id: string;
        createdAt: Date;
        telefone: string | null;
        empresa: string | null;
    }>;
    update(id: string, updateClienteDto: UpdateClienteDto): import("@prisma/client").Prisma.Prisma__ClienteClient<{
        nome: string;
        email: string | null;
        id: string;
        createdAt: Date;
        telefone: string | null;
        empresa: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ClienteClient<{
        nome: string;
        email: string | null;
        id: string;
        createdAt: Date;
        telefone: string | null;
        empresa: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
