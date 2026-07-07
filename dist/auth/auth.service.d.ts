import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(email: string, senha: string): Promise<{
        access_token: string;
        usuario: {
            id: string;
            nome: string;
            email: string;
            role: import("@prisma/client").$Enums.Role;
        };
    }>;
}
