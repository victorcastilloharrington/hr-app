import { Injectable } from '@nestjs/common';
import { Department } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Department[] | null> {
    return this.prisma.department.findMany();
  }
}
