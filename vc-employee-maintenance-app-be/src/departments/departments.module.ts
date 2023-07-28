import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsResolver } from './departments.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [DepartmentsService, DepartmentsResolver],
  imports: [PrismaModule],
})
export class DepartmentsModule {}
