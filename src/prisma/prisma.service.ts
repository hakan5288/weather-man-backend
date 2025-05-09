import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from "../../generated/prisma/client"

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit , OnModuleDestroy {
    constructor(){
        super()
    }

    async onModuleInit() {
        await this.$connect();
        console.log("Connected to database");
    }

    async onModuleDestroy() {
        await this.$disconnect();
        console.log("Disconnected from the database");
    }
}