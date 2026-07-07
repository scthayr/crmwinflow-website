import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
        nome: string;
        email: string;
        senha: string | null;
        role: import("@prisma/client").$Enums.Role;
        id: string;
        googleId: string | null;
        createdAt: Date;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        nome: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        id: string;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        nome: string;
        email: string;
        senha: string | null;
        role: import("@prisma/client").$Enums.Role;
        id: string;
        googleId: string | null;
        createdAt: Date;
    }>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): import("@prisma/client").Prisma.Prisma__UsuarioClient<{
        nome: string;
        email: string;
        senha: string | null;
        role: import("@prisma/client").$Enums.Role;
        id: string;
        googleId: string | null;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__UsuarioClient<{
        nome: string;
        email: string;
        senha: string | null;
        role: import("@prisma/client").$Enums.Role;
        id: string;
        googleId: string | null;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
