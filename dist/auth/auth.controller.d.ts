import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        usuario: {
            id: string;
            nome: string;
            email: string;
            role: import("@prisma/client").$Enums.Role;
        };
    }>;
}
