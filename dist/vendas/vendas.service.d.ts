import { PrismaService } from '../prisma/prisma.service';
import { CreateVendaDto } from './dto/create-venda.dto';
import { UpdateVendaDto } from './dto/update-venda.dto';
export declare class VendasService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createVendaDto: CreateVendaDto): import("@prisma/client").Prisma.Prisma__VendaClient<{
        cliente: {
            id: string;
            nome: string;
            email: string | null;
            createdAt: Date;
            telefone: string | null;
            empresa: string | null;
        };
        vendedor: {
            id: string;
            nome: string;
            email: string;
            role: import("@prisma/client").$Enums.Role;
        };
    } & {
        id: string;
        valor: number;
        status: string;
        criadaEm: Date;
        clienteId: string;
        vendedorId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        cliente: {
            id: string;
            nome: string;
            email: string | null;
            createdAt: Date;
            telefone: string | null;
            empresa: string | null;
        };
        vendedor: {
            id: string;
            nome: string;
            email: string;
            role: import("@prisma/client").$Enums.Role;
        };
    } & {
        id: string;
        valor: number;
        status: string;
        criadaEm: Date;
        clienteId: string;
        vendedorId: string;
    })[]>;
    findOne(id: string): Promise<{
        cliente: {
            id: string;
            nome: string;
            email: string | null;
            createdAt: Date;
            telefone: string | null;
            empresa: string | null;
        };
        vendedor: {
            id: string;
            nome: string;
            email: string;
            role: import("@prisma/client").$Enums.Role;
        };
    } & {
        id: string;
        valor: number;
        status: string;
        criadaEm: Date;
        clienteId: string;
        vendedorId: string;
    }>;
    update(id: string, updateVendaDto: UpdateVendaDto): import("@prisma/client").Prisma.Prisma__VendaClient<{
        id: string;
        valor: number;
        status: string;
        criadaEm: Date;
        clienteId: string;
        vendedorId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__VendaClient<{
        id: string;
        valor: number;
        status: string;
        criadaEm: Date;
        clienteId: string;
        vendedorId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
