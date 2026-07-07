import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { ClientesModule } from './clientes/clientes.module';
import { VendasModule } from './vendas/vendas.module';

@Module({
  imports: [PrismaModule, UsuariosModule, AuthModule, ClientesModule, VendasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
