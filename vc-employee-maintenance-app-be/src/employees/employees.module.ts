import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesResolver } from './employees.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [EmployeesService, EmployeesResolver],
  imports: [PrismaModule],
})
export class EmployeesModule {}
