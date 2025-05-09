import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private readonly prismaService;
    private readonly jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    findUserById(id: string): Promise<{
        id: string;
        name: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    validateUser(email: string, password: string): Promise<any>;
    signup(email: string, password: string, name: string): Promise<{
        access_token: string;
    }>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
