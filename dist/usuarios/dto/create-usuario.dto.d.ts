import { Role } from '@prisma/client';
export declare class CreateUsuarioDto {
    nome: string;
    email: string;
    senha: string;
    role?: Role;
}
